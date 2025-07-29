import { z } from "zod";
import { Role } from "../../enums/role.enum";
import { UserStatus } from "../../enums";

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
  updatedAt: z.date().describe("Data da última atualização do usuário"),
  createdAt: z.date().describe("Data de criação do usuário"),
  role: z.nativeEnum(Role).describe("Função atribuída ao usuário"),
  status: z.nativeEnum(UserStatus).describe("Status do usuário"),
});

export type UserDto = z.infer<typeof UserSchema>;
