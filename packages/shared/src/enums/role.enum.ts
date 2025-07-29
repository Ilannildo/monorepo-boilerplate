export const Role = {
  ADMIN: 'ADMIN',
  CONSULTANT: 'CONSULTANT',
  SELLER: 'SELLER',
  TECHNICIAN: 'TECHNICIAN',
  ENGINEER: 'ENGINEER',
  FINANCIAL: 'FINANCIAL'
} as const;

export type Role = (typeof Role)[keyof typeof Role]