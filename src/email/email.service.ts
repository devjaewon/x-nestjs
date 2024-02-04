import Mail = require('nodemailer/lib/mailer');
import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class EmailService {
  private transporter: Mail;

  constructor(private configService: ConfigService) {
    const config = configService.createEmailTransportConfig();

    this.transporter = nodemailer.createTransport(config);
  }

  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    const baseUrl = 'http://localhost:3000';
    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;
    const mailOptions = {
      from: this.configService.getSenderEmailAddress(),
      to: emailAddress,
      subject: '가입 인증 메일',
      html: `<form action="${url}" method="POST"><button>가입확인</button></form>`,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
