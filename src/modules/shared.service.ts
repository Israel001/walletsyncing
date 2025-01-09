import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { SmtpConfiguration } from '../config/configuration';
import mailer from 'nodemailer-promise';
import { IEmailDto } from '../types';

@Injectable()
export class SharedService {
  constructor(
    @Inject(SmtpConfiguration.KEY)
    private readonly smtpConfig: ConfigType<typeof SmtpConfiguration>,
  ) {}

  async sendEmail(email: IEmailDto) {
    const sendMail = mailer.config({
      host: this.smtpConfig.host,
      port: this.smtpConfig.port,
      secure: true,
      auth: {
        user: this.smtpConfig.username,
        pass: this.smtpConfig.password,
      },
    });
    sendMail(email);
  }
}
