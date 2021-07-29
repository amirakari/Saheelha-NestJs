import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { LoginCredentialsDto } from './DTO/login-credentials.dto';
import { AddUserDto } from './DTO/Add-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ForgotPasswordDto } from './DTO/forgot-password.dto';
import { MailService } from '../mail/mail.service';
import { ChangePasswordDto } from './DTO/change-password.dto';
export declare class UtilisateurService {
    private configService;
    private mailService;
    private userRepository;
    private jwtservice;
    private readonly clientAppUrl;
    constructor(configService: ConfigService, mailService: MailService, userRepository: Repository<UserEntity>, jwtservice: JwtService);
    getUsers(): Promise<UserEntity[]>;
    addCv(userData: AddUserDto): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    updateCv(id: number, user: UpdateUserDto): Promise<UserEntity>;
    softDeleteUser(id: number): Promise<UserEntity>;
    restoreUtilisateur(id: number): Promise<void>;
    login(credentials: LoginCredentialsDto): Promise<{
        access_token: string;
    }>;
    ChangePassword(id: number, forgotPassword: ChangePasswordDto): Promise<UserEntity>;
    forgotPassword(forgotPassword: ForgotPasswordDto): Promise<void>;
    envoiemail(): Promise<void>;
}
