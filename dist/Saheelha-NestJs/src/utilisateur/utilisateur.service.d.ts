import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { AddUserDto } from './DTO/Add-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
export declare class UtilisateurService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    getUsers(): Promise<UserEntity[]>;
    addCv(user: AddUserDto): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    updateCv(id: number, user: UpdateUserDto): Promise<UserEntity>;
    softDeleteUser(id: number): Promise<import("typeorm").UpdateResult>;
    restoreUtilisateur(id: number): Promise<void>;
}
