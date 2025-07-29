export const UserConfigurationStatus = {
  INITIAL: "INITIAL",
  GENERAL_DATA: "GENERAL_DATA",
  EMPLOYEES: "EMPLOYEES",
  EXPENSES: "EXPENSES",
  PAYMENTS: "PAYMENTS",
  COMPLETED: "COMPLETED",
} as const;

export type UserConfigurationStatus = (typeof UserConfigurationStatus)[keyof typeof UserConfigurationStatus];
