import Mail from 'nodemailer/lib/mailer';

export interface SendEmailDto {
  to: string;
  subject: string;
  content: string;
  attachments?: Mail.Attachment[];
}
