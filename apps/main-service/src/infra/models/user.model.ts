import { GenericStatus, Role } from "@prisma/client";

export class IUser {
  id: string;
  name: string;
  email: string;  
  phone?: string;
  password?: string;  
  status: GenericStatus;
  email_verified_at?: Date;
  role: Role;
  created_at: Date;
  updated_at: Date;
}
