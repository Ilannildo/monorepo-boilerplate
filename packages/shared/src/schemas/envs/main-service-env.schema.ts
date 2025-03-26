import { z } from "zod";

export const MainServiceEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"], {
    errorMap: () => ({
      message: 'NODE_ENV deve ser "development", "test" ou "production".',
    }),
  }),
  DATABASE_URL: z
    .string({
      message: "DATABASE_URL é obrigatória",
    })
    .nonempty(),
  APP_VERSION: z
    .string()
    .nonempty({ message: "APP_VERSION não pode estar vazio." }),
  APP_PORT: z.coerce.number().int().positive({ message: "APP_PORT inválido." }),
  REDIS_PORT: z.coerce
    .number()
    .int()
    .positive({ message: "REDIS_PORT inválido." }),
  REDIS_PASSWORD: z
    .string({
      message: "REDIS_PASSWORD é obrigatória",
    })
    .nonempty(),
  APP_NAME: z.string().nonempty({ message: "APP_NAME não pode estar vazio." }),
  JWT_SECRET_KEY: z.string().min(32, {
    message: 'JWT_SECRET_KEY deve ter pelo menos 32 caracteres.',
  }),
});
