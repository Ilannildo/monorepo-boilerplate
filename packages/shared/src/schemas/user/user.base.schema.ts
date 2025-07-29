import { z } from "zod";
import { Role } from "../../enums/role.enum";

export const UserSchema = z.object({
  id: z
    .string({ message: "O ID é um campo obrigatório" })
    .describe("Identificador único do usuário"),
  name: z
    .string()
    .describe("Nome do usuário")
    .min(1, "O nome é um campo obrigatório"),
  email: z
    .string({ message: "O email é um campo obrigatório" })
    .email("Formato de e-mail inválido")
    .describe("Endereço de e-mail do usuário"),
  phone: z.string().optional().describe("Número de telefone do usuário"),
  emailVerifiedAt: z
    .date()
    .optional()
    .describe("Data de verificação do e-mail"),
  updatedAt: z.date().describe("Data da última atualização do usuário"),
  createdAt: z.date().describe("Data de criação do usuário"),
  role: z.nativeEnum(Role).describe("Função atribuída ao usuário"),
});

export type UserDto = z.infer<typeof UserSchema>;
