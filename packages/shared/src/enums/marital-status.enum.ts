export const MaritalStatus = {
  SINGLE: "SINGLE",
  MARRIED: "MARRIED",
  SEPARATED: "SEPARATED",
  DIVORCED: "DIVORCED",
  WIDOWED: "WIDOWED",
} as const;

export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus];
