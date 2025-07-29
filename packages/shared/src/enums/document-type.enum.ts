export const DocumentType = {
  CNPJ: "CNPJ",
  CPF: "CPF",
} as const;

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];
