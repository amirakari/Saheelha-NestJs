"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
let MailService = class MailService {
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
};
MailService = __decorate([
    common_1.Injectable()
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map