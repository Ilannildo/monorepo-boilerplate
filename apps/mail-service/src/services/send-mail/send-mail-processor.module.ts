import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { QUEUE_EVENTS } from '@solarapp/shared';
import { SendMailWelcomeProcessor } from './auth/welcome.processor';
import { MailerModule } from '@/infra/mailer/mailer.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: QUEUE_EVENTS.SEND_MAIL.AUTH.WELCOME,
    }),
    MailerModule
  ],
  providers: [SendMailWelcomeProcessor],
})
export class SendMailProcessorModule {}
