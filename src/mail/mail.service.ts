import { Injectable } from '@nestjs/common';
import * as Mailgun from 'mailgun-js';
import { MailInterface } from './interface/mail.interface';
import * as nodemailer from 'nodemailer';
@Injectable()
export class MailService {
  private mg: Mailgun.Mailgun;
  constructor() {
    this.mg = Mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_API_DOMAIN,
    });
  }
  async send() {
    nodemailer.createTestAccount((err, account) => {
      if (err) {
        console.log(err);
      }
      const transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: true,
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_API_KEY,
        },
      });

      const message = {
        from: 'Sender Name <amir.akari@esprit.tn>',
        to: `akari.amir97@gmail.com`,
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello to myself!',
        html: `
        <html>
        <body>
        <p>Testing sparkpost API</p>
        </body>
        </html>`,
      };

      transporter.sendMail(message, (err, info) => {
        if (err) {
          console.log('Error occurred. ' + err.message);
        }
      });
    });
  }
}
