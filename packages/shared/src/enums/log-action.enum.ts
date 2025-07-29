export const LogAction = {
  GENERAL: "GENERAL",
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
} as const;

export type LogAction = (typeof LogAction)[keyof typeof LogAction];
