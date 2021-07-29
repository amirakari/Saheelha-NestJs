import { ProduitEntity } from './entities/produit.entity';
import { Repository } from 'typeorm';
import { AddProduitDto } from './DTO/Add-produit.dto';
import { UpdateProduitDto } from './DTO/update-produit.dto';
import { PanierEntity } from '../listefavoris/entities/panier.entity';
export declare class ProduitService {
    private PanierRepository;
    private userRepository;
    confirmLink: string;
    constructor(PanierRepository: Repository<PanierEntity>, userRepository: Repository<ProduitEntity>);
    getUsers(): Promise<ProduitEntity[]>;
    getProduitParBoutique(id: number): Promise<ProduitEntity[]>;
    getProduitParBoutiqueDon(id: number): Promise<ProduitEntity[]>;
    rechercheParLocalisation(adresse: string): Promise<ProduitEntity[]>;
    rechercheParNom(nom: string): Promise<ProduitEntity[]>;
    recherchePartype(type: string): Promise<ProduitEntity[]>;
    rechercheParStatus(status: string): Promise<ProduitEntity[]>;
    addCv(user: AddProduitDto, codeabare: any, boutique: any): Promise<ProduitEntity>;
    findById(id: number): Promise<ProduitEntity>;
    updateCv(id: number, user: UpdateProduitDto): Promise<ProduitEntity>;
    findByPanierId(id: number): Promise<ProduitEntity[]>;
    softDeleteUser(id: number): Promise<import("typeorm").UpdateResult>;
    restoreUtilisateur(id: number): Promise<void>;
}
