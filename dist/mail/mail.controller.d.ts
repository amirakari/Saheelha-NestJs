import { MailService } from './mail.service';
export declare class MailController {
    private userService;
    constructor(userService: MailService);
    forgotPassword(): Promise<void>;
}
