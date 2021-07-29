import { UserEntity } from './entities/user.entity';
import { UtilisateurService } from './utilisateur.service';
import { AddUserDto } from './DTO/Add-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { LoginCredentialsDto } from './DTO/login-credentials.dto';
export declare class UtilisateurController {
    private userService;
    constructor(userService: UtilisateurService);
    getAllcvs(): Promise<UserEntity[]>;
    addCv(addCvDto: AddUserDto): Promise<UserEntity>;
    Login(credentials: LoginCredentialsDto): Promise<{
        access_token: string;
    }>;
    updateCv(updateUserDto: UpdateUserDto, id: number): Promise<UserEntity>;
    removeUser(id: number): Promise<import("typeorm").UpdateResult>;
    recoverUtilisateur(id: number): Promise<void>;
}
