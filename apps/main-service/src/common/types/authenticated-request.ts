import { User } from '@solarapp/db';
import { Request } from 'express';

export type AuthenticatedRequest = Request & {
  user: User;
};
