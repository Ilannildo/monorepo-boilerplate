import { z } from "zod";
import { Role } from "../../enums/role.enum";
import { UserStatus } from "../../enums";
import { CreateUserProfileSchema } from "../user-profile/user-profile.create.schema";
import { CreateUserSettingsSchema } from "../user-settings/user-settings.create.schema";

export const CreateUserSchema = z.object({
  name: z
    .string()
    .describe("Nome do usuário")
    .min(1, "O nome é um campo obrigatório"),
  email: z
    .string({ message: "O email é um campo obrigatório" })
    .email("Formato de e-mail inválido")
    .describe("Endereço de e-mail do usuário"),
  role: z.nativeEnum(Role).describe("Função atribuída ao usuário"),
  status: z.nativeEnum(UserStatus).optional().describe("Status do usuário"),
  profile: CreateUserProfileSchema.optional().describe(
    "Dados de perfil do usuário"
  ),
  settings: CreateUserSettingsSchema.optional().describe(
    "Dados de configuração do usuário"
  )  
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
