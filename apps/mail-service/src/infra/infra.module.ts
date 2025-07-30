import { Module } from '@nestjs/common';
import { LoggerModule } from './logger/logger.module';
import { MailerModule } from './mailer/mailer.module';
import { SendMailProcessorModule } from '@/services/send-mail/send-mail-processor.module';

@Module({
  imports: [LoggerModule, SendMailProcessorModule],
})
export class InfraModule {}
