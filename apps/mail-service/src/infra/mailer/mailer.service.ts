import { env } from '@/env';
import { Injectable } from '@nestjs/common';
import { Transporter, createTransport } from 'nodemailer';
import { SendEmailDto } from './dto/send-mail.dto';

@Injectable()
export class MailerService {
  transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.NODE_ENV === 'production',
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });
  }

  async sendMail({ to, subject, content, attachments }: SendEmailDto) {
    await this.transporter.sendMail({
      from: `Solarapp <${env.SMTP_FROM_EMAIL}>`,
      to,
      subject,
      html: content,
      attachments,
    });
  }
}
