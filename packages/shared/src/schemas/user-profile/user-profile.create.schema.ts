import { z } from "zod";
import { DocumentType, MaritalStatus } from "../../enums";
import { isValidCNPJ, isValidCPF } from "../../common";

export const CreateUserProfileSchema = z
  .object({
    profession: z.string().optional().describe("Profissão do usuário"),
    nationality: z.string().optional().describe("Nacionalidade do usuário"),
    phone: z.string().optional().describe("Número de telefone do usuário"),
    username: z.string().optional().describe("Nome de usuário"),
    document: z.string().describe("CPF/CNPJ do usuário"),
    documentType: z
      .nativeEnum(DocumentType)
      .describe("Tipo do documento do usuário"),
    maritalStatus: z
      .nativeEnum(MaritalStatus)
      .describe("Estado civil do usuário"),
  })
  .superRefine(({ documentType, document }, context) => {
    if (documentType === "CNPJ" && !isValidCNPJ(document)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["document"],
        message: "CNPJ inválido",
      });
    }
    if (documentType === "CPF" && !isValidCPF(document)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["document"],
        message: "CPF inválido",
      });
    }
  });

export type CreateUserProfileDto = z.infer<typeof CreateUserProfileSchema>;
