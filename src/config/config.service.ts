import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

@Injectable()
export class ConfigService {
  constructor(private env: NestConfigService = new NestConfigService()) {}

  getSenderEmailAddress(): string {
    return `${this.env.get('NAVER_USER')}@naver.com`;
  }

  createEmailTransportConfig(): SMTPTransport.Options {
    return {
      service: 'naver',
      host: 'smtp.naver.com',
      port: 465,
      auth: {
        user: this.env.get('NAVER_USER'),
        pass: decodeURIComponent(this.env.get('NAVER_PASSWORD')),
      },
    };
  }
}
