import { CreateUserSchema } from '@solarapp/shared';
import { createZodDto } from 'nestjs-zod';

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
