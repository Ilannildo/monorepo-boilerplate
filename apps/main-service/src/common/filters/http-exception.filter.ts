import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';
import { IncomingMessage } from 'http';
import { ZodSerializationException } from 'nestjs-zod';
import { ZodError } from 'zod';

export interface HttpExceptionResponse {
  statusCode: number;
  message: any;
  error: string;
}

export const getStatusCode = (exception: unknown): number => {
  return exception instanceof HttpException
    ? exception.getStatus()
    : HttpStatus.INTERNAL_SERVER_ERROR;
};

export const getErrorCode = (exception: unknown): string => {
  const exceptionError =
    exception instanceof HttpException ? (exception.cause as any) : undefined;

  return exceptionError?.message ?? 'auth/internal-error';
};

export const getErrorMessage = (exception: unknown): any => {
  if (exception instanceof HttpException) {
    console.log("http exception")
    const errorResponse = exception.getResponse();
    let errorMessage =
      (errorResponse as HttpExceptionResponse).message || exception.message;

    if (Array.isArray(errorMessage) && errorMessage.length > 0) {
      errorMessage = errorMessage[0];
    }

    return errorMessage;
  }

  if (exception instanceof ZodSerializationException) {
    console.log("zod exception")
    const zodError = exception.getZodError();
    const error = zodError.errors.length > 0 ? zodError.errors[0] : undefined;

    return error.message || 'Erro de validação';
  }

  return String(exception);
};

@Catch(ZodSerializationException, HttpException)
export class HttpExceptionFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<IncomingMessage>();
    const status = getStatusCode(exception);
    const message = getErrorMessage(exception);
    const errorCode = getErrorCode(exception);

    response.status(status).json({
      success: false,
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
      error: errorCode,
    });
  }
}
