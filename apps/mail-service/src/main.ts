import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { LoggerService } from 'src/infra/logger/logger.service';
import { AppModule } from './app.module';
import { env } from './env';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
    bodyParser: false,
  });

  // LOGGER
  const LoggerServiceInstance = app.get(LoggerService);
  app.useLogger(LoggerServiceInstance);

  await app.listen(env.APP_PORT).then(() => {
    LoggerServiceInstance.log(
      `${env.APP_NAME.toUpperCase()} is running on port ${env.APP_PORT} 🔥`,
    );
  });
}
bootstrap();
