import { Role, UserStatus } from "@solarapp/shared";

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
