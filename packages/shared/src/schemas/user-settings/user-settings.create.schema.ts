import { z } from "zod";
import { UserConfigurationStatus } from "../../enums";

export const CreateUserSettingsSchema = z.object({
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
});

export type CreateUserSettingsDto = z.infer<typeof CreateUserSettingsSchema>;
