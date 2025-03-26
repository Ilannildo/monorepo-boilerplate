import { SignUpRequestSchema } from '@solarapp/shared';
import { createZodDto } from 'nestjs-zod';

export class SignUpRequestDto extends createZodDto(SignUpRequestSchema) {}
