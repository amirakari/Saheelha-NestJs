/// <reference types="passport" />
/// <reference types="multer" />
import { UserEntity } from './entities/user.entity';
import { UtilisateurService } from './utilisateur.service';
import { AddUserDto } from './DTO/Add-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { LoginCredentialsDto } from './DTO/login-credentials.dto';
import { JwtStrategy } from './strategy/passport-jwt.strategy';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { ForgotPasswordDto } from './DTO/forgot-password.dto';
export declare class UtilisateurController {
    private userService;
    private userconnecte;
    constructor(userService: UtilisateurService, userconnecte: JwtStrategy);
    getAllcvs(): Promise<UserEntity[]>;
    getuserconnecte(request: Request): Promise<Express.User>;
    addCv(addCvDto: AddUserDto): Promise<UserEntity>;
    Login(credentials: LoginCredentialsDto): Promise<{
        access_token: string;
    }>;
    forgotPassword(forgotPassword: ForgotPasswordDto): Promise<void>;
    ChangePassword(updateUserDto: UpdateUserDto, id: number): Promise<UserEntity>;
    updateCv(updateUserDto: UpdateUserDto, id: number): Promise<any>;
    uploadfile(file: Express.Multer.File, id: number, updateUserDto: UpdateUserDto): Promise<any>;
    findProfileImage(res: any, image: any, request: Request): Observable<any>;
    removeUser(id: number): Promise<UserEntity>;
    recoverUtilisateur(id: number): Promise<void>;
    getusers(): Promise<void>;
}
