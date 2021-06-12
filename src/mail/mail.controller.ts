import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ForgotPasswordDto } from '../utilisateur/DTO/forgot-password.dto';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private userService: MailService) {}
  @Post('')
  async forgotPassword(): Promise<void> {
    return this.userService.send();
  }
}
