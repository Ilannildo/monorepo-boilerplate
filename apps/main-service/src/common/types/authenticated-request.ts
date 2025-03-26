import { IUser } from '@infra/models/user.model';
import { Request } from 'express';

export type AuthenticatedRequest = Request & {
  user: IUser;
};
