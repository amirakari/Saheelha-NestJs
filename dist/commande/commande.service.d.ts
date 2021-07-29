import { CommandeEntity } from './entities/commande.entity';
import { Repository } from 'typeorm';
import { AddCommandeDto } from './DTO/Add-commande.dto';
import { UpdateCommandeDto } from './DTO/update-commande.dto';
export declare class CommandeService {
    private userRepository;
    constructor(userRepository: Repository<CommandeEntity>);
    getUsers(id: number): Promise<CommandeEntity[]>;
    addCv(boutique: AddCommandeDto, user: any, quantite: any, produit: any): Promise<CommandeEntity>;
    findById(id: number): Promise<CommandeEntity>;
    updateCv(id: number, user: UpdateCommandeDto): Promise<CommandeEntity>;
    softDeleteUser(id: number): Promise<import("typeorm").UpdateResult>;
    restoreUtilisateur(id: number): Promise<void>;
    getCommandebyboutique(id: number): Promise<CommandeEntity[]>;
    getCommandeEnMai(id: number): Promise<number>;
    getCommandeEnJanvier(id: number): Promise<number>;
    getCommandeEnFevrier(id: number): Promise<number>;
    getCommandeEnMars(id: number): Promise<number>;
    getCommandeEnAvril(id: number): Promise<number>;
    getCommandeEnJuin(id: number): Promise<number>;
    getCommandeEnJuillet(id: number): Promise<number>;
    getCommandeEnAout(id: number): Promise<number>;
    getCommandeEnSeptembre(id: number): Promise<number>;
    getCommandeEnOctobre(id: number): Promise<number>;
    getCommandeEnNovembre(id: number): Promise<number>;
    getCommandeEnDecembre(id: number): Promise<number>;
}
