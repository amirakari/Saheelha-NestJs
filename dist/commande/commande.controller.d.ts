import { CommandeService } from './commande.service';
import { CommandeEntity } from './entities/commande.entity';
import { AddCommandeDto } from './DTO/Add-commande.dto';
import { UpdateCommandeDto } from './DTO/update-commande.dto';
import { Request } from 'express';
import { ProduitService } from '../produit/produit.service';
export declare class CommandeController {
    private userService;
    private produitService;
    constructor(userService: CommandeService, produitService: ProduitService);
    getAllcvs(id: number): Promise<CommandeEntity[]>;
    getCommandebyboutique(id: number): Promise<CommandeEntity[]>;
    getCommandeEnMai(id: number): Promise<number>;
    getCommandeEnJanvier(id: number): Promise<number>;
    getCommandeEnFevier(id: number): Promise<number>;
    getCommandeEnMars(id: number): Promise<number>;
    getCommandeEnAvril(id: number): Promise<number>;
    getCommandeEnJuin(id: number): Promise<number>;
    getCommandeEnJuillet(id: number): Promise<number>;
    getCommandeEnAout(id: number): Promise<number>;
    getCommandeEnSeptembre(id: number): Promise<number>;
    getCommandeEnOctobre(id: number): Promise<number>;
    getCommandeEnNovembre(id: number): Promise<number>;
    getCommandeEnDecembre(id: number): Promise<number>;
    getCommandeById(id: number): Promise<CommandeEntity>;
    addCv(addCvDto: AddCommandeDto, request: Request, id: number, quantite: number): Promise<CommandeEntity>;
    updateCv(updateUserDto: UpdateCommandeDto, id: number): Promise<CommandeEntity>;
    removeUser(id: number): Promise<import("typeorm").UpdateResult>;
    recoverUtilisateur(id: number): Promise<void>;
}
