export const LogEntity = {
  USER: "USER",
  USER_PROFILE: "USER_PROFILE",
  USER_SETTING: "USER_SETTING",
  COMPANY: "COMPANY",
  COMPANY_CONTACT: "COMPANY_CONTACT",
} as const;

export type LogEntity = (typeof LogEntity)[keyof typeof LogEntity];
