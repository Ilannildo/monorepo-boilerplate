import { IUser } from '@infra/models/user.model';
import { UserResponseDto } from './dto/response/user-response.dto';

export function mapListUsersToResponse(users: IUser[]): UserResponseDto[] {
  return users.map((user) => ({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    updated_at: user.updated_at,
    email_verified_at: user.email_verified_at,
    phone: user.phone,
    created_at: user.created_at,
  }));
}

export function mapGetUserToResponse(
  user?: IUser,
): UserResponseDto | undefined {
  if (!user) return;

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    updated_at: user.updated_at,
    email_verified_at: user.email_verified_at,
    phone: user.phone,
    created_at: user.created_at,
  };
}
