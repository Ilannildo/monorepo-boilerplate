import { z } from "zod";

export const signUpRequestSchema = z.object({
  name: z
    .string({ required_error: "O nome é um campo obrigatório" })
    .min(6, "O nome precisa ter no mínimo 6 letras.")
    .describe("Nome do usuário"),
  email: z
    .string({ required_error: "O e-mail é um campo obrigatório" })
    .email("Informe um e-mail válido")
    .describe("E-mail do usuário"),
  password: z
    .string({ required_error: "A senha é um campo obrigatório" })
    .min(6, "A senha precisa ter no mínimo 6 caracteres")
    .max(32, "A senha precisa ter no máximo 32 caracteres")
    .describe("Senha do usuário"),
});

export type ISignUpRequest = z.infer<typeof signUpRequestSchema>;
