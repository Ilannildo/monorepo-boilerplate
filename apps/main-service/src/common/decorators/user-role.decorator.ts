import { SetMetadata } from '@nestjs/common';
import { Role } from '@solarapp/shared';

export const USER_ROLE = 'user-roles';
export const UserRoles = (...args: Role[]) => SetMetadata(USER_ROLE, args);
