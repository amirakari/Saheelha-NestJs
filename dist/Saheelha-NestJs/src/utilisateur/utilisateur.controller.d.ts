import { UserEntity } from './entities/user.entity';
import { UtilisateurService } from './utilisateur.service';
import { AddUserDto } from './DTO/Add-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
export declare class UtilisateurController {
    private userService;
    constructor(userService: UtilisateurService);
    getAllcvs(): Promise<UserEntity[]>;
    addCv(addCvDto: AddUserDto): Promise<UserEntity>;
    updateCv(updateUserDto: UpdateUserDto, id: number): Promise<UserEntity>;
    removeUser(id: number): Promise<import("typeorm").UpdateResult>;
    recoverUtilisateur(id: number): Promise<void>;
}
