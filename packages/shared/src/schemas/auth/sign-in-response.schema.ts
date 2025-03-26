import { z } from "zod";
import { UserResponseSchema } from "../user/user-response.schema";

export const SignInResponseSchema = z.object({
  access_token: z
    .string({ required_error: "O token é um campo obrigatório" })
    .describe("Token de acesso"),
  user: z.lazy(() => UserResponseSchema).describe("Usuário autenticado"),
});

export type ISignInResponse = z.infer<typeof SignInResponseSchema>;
