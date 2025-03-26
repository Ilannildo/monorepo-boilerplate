import { z } from "zod";

export const SignInResponseSchema = z.object({
  access_token: z
    .string({ required_error: "O token é um campo obrigatório" })
    .describe("Token de acesso"),
});

export type ISignInResponse = z.infer<typeof SignInResponseSchema>;
