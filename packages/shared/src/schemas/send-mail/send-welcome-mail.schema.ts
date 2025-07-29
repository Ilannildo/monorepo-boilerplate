import { z } from "zod";

export const SendWelcomeMailSchema = z.object({
  name: z.string(),
  userId: z.string(),
  email: z.string().email(),
});

export type SendMailWelcomeDto = z.infer<typeof SendWelcomeMailSchema>;
