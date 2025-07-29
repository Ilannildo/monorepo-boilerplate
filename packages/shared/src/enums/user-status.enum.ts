export const UserStatus = {
  CREATED: "CREATED",
  INVITED: "INVITED",
  ACTIVE: "ACTIVE",
  BLOCKED: "BLOCKED",
} as const;

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
