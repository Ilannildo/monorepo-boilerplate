import { z } from "zod";
import { Role } from "../../enums/role.enum";

export const CreateUserSchema = z.object({
  name: z
    .string()
    .describe("Nome do usuário")
    .min(1, "O nome é um campo obrigatório"),
  email: z
    .string({ message: "O email é um campo obrigatório" })
    .email("Formato de e-mail inválido")
    .describe("Endereço de e-mail do usuário"),
  phone: z.string().optional().describe("Número de telefone do usuário"),
  role: z.nativeEnum(Role).describe("Função atribuída ao usuário"),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
