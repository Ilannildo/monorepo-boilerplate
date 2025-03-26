import 'dotenv/config';

import { MainServiceEnvSchema } from '@solarapp/shared';
import { z } from 'zod';

let env: z.infer<typeof MainServiceEnvSchema>;

try {
  env = MainServiceEnvSchema.parse(process.env);
} catch (error) {
  console.error('Configuração de ambiente inválida:');
  error.errors.forEach((err) => {
    console.error(`${err.path} - ${err.message}`);
  });
  process.exit(1); // Encerra o processo com erro
}

export { env };
