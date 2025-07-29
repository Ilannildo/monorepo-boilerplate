import { z } from "zod";
import { DocumentType, MaritalStatus } from "../../enums";

export const UserProfileSchema = z.object({
  id: z
    .string({ message: "O ID é um campo obrigatório" })
    .describe("Identificador único do perfil do usuário"),
  userId: z.string().describe("Identificador único do usuário"),
  profession: z.string().optional().describe("Profissão do usuário"),
  nationality: z.string().optional().describe("Nacionalidade do usuário"),
  phone: z.string().optional().describe("Número de telefone do usuário"),
  username: z.string().optional().describe("Nome de usuário"),
  document: z.string().optional().describe("CPF/CNPJ do usuário"),
  documentType: z
    .nativeEnum(DocumentType)
    .describe("Tipo do documento do usuário"),
  maritalStatus: z
    .nativeEnum(MaritalStatus)
    .describe("Estado civil do usuário"),
  updatedAt: z.date().describe("Data da última atualização do usuário"),
  createdAt: z.date().describe("Data de criação do usuário"),
});

export type UserProfileDto = z.infer<typeof UserProfileSchema>;
