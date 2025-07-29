import { UserStatus, Role } from "@prisma/client";

export class IUser {
  id: string;
  name: string;
  email: string;  
  phone?: string;
  password?: string;  
  status: UserStatus;
  emailVerifiedAt?: Date;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}
