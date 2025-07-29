export const CompanyStatus = {
  UNDER_REVIEW: "UNDER_REVIEW",
  DENIED: "DENIED",
  ACCEPTED: "ACCEPTED",
} as const;

export type CompanyStatus = (typeof CompanyStatus)[keyof typeof CompanyStatus];
