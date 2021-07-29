import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { LoginCredentialsDto } from './DTO/login-credentials.dto';
import { AddUserDto } from './DTO/Add-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UtilisateurService {
    private userRepository;
    private jwtservice;
    constructor(userRepository: Repository<UserEntity>, jwtservice: JwtService);
    getUsers(): Promise<UserEntity[]>;
    addCv(userData: AddUserDto): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    updateCv(id: number, user: UpdateUserDto): Promise<UserEntity>;
    softDeleteUser(id: number): Promise<import("typeorm").UpdateResult>;
    restoreUtilisateur(id: number): Promise<void>;
    login(credentials: LoginCredentialsDto): Promise<{
        access_token: string;
    }>;
}
