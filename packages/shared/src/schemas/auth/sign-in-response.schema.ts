import { z } from "zod";
import { userResponseSchema } from "../user/user-response.schema";

export const SignInResponseSchema = z.object({
  accessToken: z
    .string({ error: "O token é um campo obrigatório" })
    .describe("Token de acesso"),
  user: z.lazy(() => userResponseSchema).describe("Usuário autenticado"),
});

export type ISignInResponse = z.infer<typeof SignInResponseSchema>;
