import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production'], {
    message: 'NODE_ENV deve ser "development", "test" ou "production".',
  }),
  APP_VERSION: z
    .string()
    .nonempty({ message: 'APP_VERSION não pode estar vazio.' }),
  APP_PORT: z.coerce.number().int().positive({ message: 'APP_PORT inválido.' }),
  REDIS_URL: z
    .string({
      message: 'DATABASE_URL é obrigatória',
    })
    .nonempty(),
  APP_NAME: z.string().nonempty({ message: 'APP_NAME não pode estar vazio.' }),
  SMTP_HOST: z
    .string()
    .nonempty({ message: 'SMTP_HOST não pode estar vazio.' }),
  SMTP_PORT: z.coerce
    .number()
    .int()
    .positive({ message: 'SMTP_PORT inválido.' }),
  SMTP_USER: z
    .string()
    .nonempty({ message: 'SMTP_USER não pode estar vazio.' }),
  SMTP_PASS: z
    .string()
    .nonempty({ message: 'SMTP_PASS não pode estar vazio.' }),
  SMTP_FROM_EMAIL: z
    .string()
    .email({ message: 'SMTP_FROM_EMAIL deve ser um email válido.' }),
});
