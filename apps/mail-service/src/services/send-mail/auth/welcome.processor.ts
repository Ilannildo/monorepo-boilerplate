import { MailerService } from '@/infra/mailer/mailer.service';
import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { QUEUE_EVENTS, SendMailWelcomeDto } from '@solarapp/shared';
import { Job } from 'bullmq';

@Processor(QUEUE_EVENTS.SEND_MAIL.AUTH.WELCOME)
export class SendMailWelcomeProcessor extends WorkerHost {
  private readonly logger = new Logger(SendMailWelcomeProcessor.name);

  constructor(private mailerService: MailerService) {
    super();
  }

  async process(job: Job<SendMailWelcomeDto>) {
    const { name, email, userId } = job.data;

    const emailBody = JSON.stringify(job.data);

    console.log(`Send email to ${email}`)

    // const emailTemplate = WelcomeHtmlTemplate({
    //   name: name,
    // });

    // const content = await render(emailTemplate);

    // const subject = 'Bem vindo(a) à Eventizei';

    // try {
    //   await this.mailerService.sendMail({
    //     to: email,
    //     subject,
    //     content,
    //   });

    //   await this.emailLogsRepository.create({
    //     user: {
    //       connect: {
    //         id: user_id,
    //       },
    //     },
    //     email_body: emailBody,
    //     email_subject: subject,
    //     sent_at: new Date(),
    //     status: true,
    //   });

    //   return true;
    // } catch (error) {
    //   console.log('Error Email', error);
    //   await this.emailLogsRepository.create({
    //     user: {
    //       connect: {
    //         id: user_id,
    //       },
    //     },
    //     sent_error: 'Ocorreu um erro ao enviar o email de boas vindas',
    //     email_body: emailBody,
    //     email_subject: subject,
    //     status: false,
    //   });
    //   return false;
    // }
  }

  @OnWorkerEvent('active')
  onActive(job: Job) {
    this.logger.log(`Processando ${job.id} do tipo ${job.name}...`);
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job) {
    this.logger.log(`Finalizado ${job.id} do tipo ${job.name}...`);
  }
}
