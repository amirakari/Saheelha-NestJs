import { Injectable } from '@nestjs/common';
import * as Mailgun from 'mailgun-js';
import { MailInterface } from './interface/mail.interface';
import * as nodemailer from 'nodemailer';
import * as google from 'googleapis';
@Injectable()
export class MailService {
  async send() {
    nodemailer.createTestAccount((err, account) => {
      if (err) {
        console.log(err);
      }
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'amir.akari@esprit.tn',
          pass: '183JMT1875',
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
