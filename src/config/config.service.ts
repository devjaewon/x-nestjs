import { Injectable } from '@nestjs/common';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

@Injectable()
export class ConfigService {
  getSenderEmailAddress(): string {
    return `${process.env.NAVER_USER}@naver.com`;
  }

  createEmailTransportConfig(): SMTPTransport.Options {
    return {
      service: 'naver',
      host: 'smtp.naver.com',
      port: 465,
      auth: {
        user: process.env.NAVER_USER,
        pass: decodeURIComponent(process.env.NAVER_PASSWORD),
      },
    };
  }
}
