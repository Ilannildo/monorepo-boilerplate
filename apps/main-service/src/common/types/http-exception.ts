import { HttpStatus } from '@nestjs/common';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const httpExceptionSchema = z.object({  
  timestamp: z.date(),
  path: z.string(),
  message: z.string(),
  code: z.nativeEnum(HttpStatus),
});

export class HttpExceptionDto extends createZodDto(httpExceptionSchema) {}
