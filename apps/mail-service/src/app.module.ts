import { BullModule } from '@nestjs/bullmq';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { env } from './env';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        url: env.REDIS_URL,
      },
    }),
    InfraModule,
  ],
  controllers: [],
})
export class AppModule {}
