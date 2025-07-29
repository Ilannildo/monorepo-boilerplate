import { z } from "zod";
import { UserConfigurationStatus } from "../../enums";

export const UserSettingsSchema = z.object({
  id: z
    .string({ message: "O ID é um campo obrigatório" })
    .describe("Identificador único do perfil do usuário"),
  userId: z.string().describe("Identificador único do usuário"),
  locale: z.string().optional().describe("Local do usuário"),
  timezone: z.string().optional().describe("Timezone do usuário"),
  configurationStatus: z
    .nativeEnum(UserConfigurationStatus)
    .describe("Status da configuração do usuário"),
  emailVerifiedAt: z
    .date()
    .optional()
    .describe("Data de verificação do e-mail"),
  minCommission: z.number().optional().describe("Comissão mínima do usuário"),
  maxCommission: z.number().optional().describe("Comissão máxima do usuário"),
  updatedAt: z.date().describe("Data da última atualização do usuário"),
  createdAt: z.date().describe("Data de criação do usuário"),
});

export type UserSettingsDto = z.infer<typeof UserSettingsSchema>;
