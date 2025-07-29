import { z } from "zod";

export const SignInRequestSchema = z.object({
  email: z
    .string({
      message: "O email é obrigatório"
    })
    .email("Informe um e-mail válido")
    .describe("E-mail do usuário"),
  password: z
    .string({ message: "A senha é um campo obrigatório" })
    .min(6, "A senha precisa ter no mínimo 6 caracteres")
    .max(32, "A senha precisa ter no máximo 32 caracteres")
    .describe("Senha do usuário"),
});

export type ISignInRequest = z.infer<typeof SignInRequestSchema>;
