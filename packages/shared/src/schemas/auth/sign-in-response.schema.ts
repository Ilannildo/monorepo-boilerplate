import { z } from "zod";
import { UserSchema } from "../user/user.base.schema";

export const SignInResponseSchema = z.object({
  accessToken: z
    .string({ message: "O token é um campo obrigatório" })
    .describe("Token de acesso"),
  user: UserSchema.describe("Usuário autenticado"),
});

export type ISignInResponse = z.infer<typeof SignInResponseSchema>;
