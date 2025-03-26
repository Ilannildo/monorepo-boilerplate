import { SignInRequestSchema } from '@solarapp/shared';
import { createZodDto } from 'nestjs-zod';

export class SignInRequestDto extends createZodDto(SignInRequestSchema) {}
