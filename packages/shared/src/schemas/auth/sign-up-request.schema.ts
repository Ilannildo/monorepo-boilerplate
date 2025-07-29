import { z } from "zod";

export const SignUpRequestSchema = z.object({
  name: z
    .string({ message: "O nome é um campo obrigatório" })
    .min(6, "O nome precisa ter no mínimo 6 letras.")
    .describe("Nome do usuário"),
  email: z
    .string({ message: "O e-mail é um campo obrigatório" })
    .email("Informe um e-mail válido")
    .describe("E-mail do usuário"),
  password: z
    .string({ message: "A senha é um campo obrigatório" })
    .min(6, "A senha precisa ter no mínimo 6 caracteres")
    .max(32, "A senha precisa ter no máximo 32 caracteres")
    .describe("Senha do usuário"),
});

export type ISignUpRequest = z.infer<typeof SignUpRequestSchema>;
