import { IUser } from '@infra/models/user.model';
import { UserResponseDto } from './dto/response/user-response.dto';

export function mapGetUserToResponse(
  user?: IUser,
): UserResponseDto | undefined {
  if (!user) return;

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    updatedAt: user.updatedAt,
    emailVerifiedAt: user.emailVerifiedAt,
    phone: user.phone,
    createdAt: user.createdAt,
    status: user.status,
  };
}

export function mapListUsersToResponse(users: IUser[]): UserResponseDto[] {
  return users.map((user) => mapGetUserToResponse(user));
}
