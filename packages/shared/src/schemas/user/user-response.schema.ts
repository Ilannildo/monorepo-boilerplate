import { z } from "zod";
import { Role } from "../../enum/role.enum";

export const UserResponseSchema = z.object({
  id: z
    .string({ required_error: "O ID é um campo obrigatório" })
    .describe("Identificador único do usuário"),
  name: z
    .string()
    .describe("Nome do usuário")
    .min(1, "O nome é um campo obrigatório"),
  email: z
    .string()
    .email("Formato de e-mail inválido")
    .describe("Endereço de e-mail do usuário"),
  phone: z.string().optional().describe("Número de telefone do usuário"),
  email_verified_at: z
    .date()
    .optional()
    .describe("Data de verificação do e-mail"),
  updated_at: z.date().describe("Data da última atualização do usuário"),
  created_at: z.date().describe("Data de criação do usuário"),
  role: z.nativeEnum(Role).describe("Função atribuída ao usuário"),
});

export type IUserResponse = z.infer<typeof UserResponseSchema>;
