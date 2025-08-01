import { UserSchema } from '@solarapp/shared';
import { createZodDto } from 'nestjs-zod';

export class UserResponseDto extends createZodDto(UserSchema) {}
