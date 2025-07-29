export const GenericStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

export type GenericStatus = (typeof GenericStatus)[keyof typeof GenericStatus];
