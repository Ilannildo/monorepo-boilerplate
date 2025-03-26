import { SignInResponseSchema } from '@solarapp/shared';
import { createZodDto } from 'nestjs-zod';

export class SignInResponseDto extends createZodDto(SignInResponseSchema) {}
