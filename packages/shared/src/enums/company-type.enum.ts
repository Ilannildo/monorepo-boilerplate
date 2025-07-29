export const CompanyType = {
  INTEGRATOR: 'INTEGRATOR',
  DISTRIBUTOR: 'DISTRIBUTOR'
} as const;

export type CompanyType = (typeof CompanyType)[keyof typeof CompanyType]