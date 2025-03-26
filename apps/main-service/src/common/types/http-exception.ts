import { HttpStatus } from '@nestjs/common';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const httpExceptionSchema = z.object({
  status: z.boolean(),
  code: z.nativeEnum(HttpStatus),
  timestamp: z.date(),
  path: z.string(),
  message: z.string(),
});

export class HttpExceptionDto extends createZodDto(httpExceptionSchema) {}
