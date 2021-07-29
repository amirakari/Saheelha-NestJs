/// <reference types="multer" />
import { ProduitService } from './produit.service';
import { ProduitEntity } from './entities/produit.entity';
import { AddProduitDto } from './DTO/Add-produit.dto';
import { UpdateProduitDto } from './DTO/update-produit.dto';
import { Request } from 'express';
import { BoutiqueService } from '../boutique/boutique.service';
import { Observable } from 'rxjs';
export declare class ProduitController {
    private userService;
    private boutiqueService;
    i: number;
    constructor(userService: ProduitService, boutiqueService: BoutiqueService);
    getAllcvs(): Promise<ProduitEntity[]>;
    rechercheParNom(nom: string): Promise<ProduitEntity[]>;
    rechercheParLocalisation(adresse: string): Promise<ProduitEntity[]>;
    recherchePartype(type: string): Promise<ProduitEntity[]>;
    rechercheParStatus(status: string): Promise<ProduitEntity[]>;
    getProduitbyId(id: number): Promise<ProduitEntity>;
    getproduitbyId(id: number): Promise<ProduitEntity[]>;
    uploadfile(file: Express.Multer.File, request: Request, id: number, updateUserDto: UpdateProduitDto, user: any): Promise<any>;
    findProfileImage(res: any, image: any): Observable<any>;
    getproduitbyId1(id: number): Promise<ProduitEntity[]>;
    addCv(addCvDto: AddProduitDto, codeabare: number, id: number): Promise<ProduitEntity>;
    updateCv(updateUserDto: UpdateProduitDto, id: number): Promise<ProduitEntity>;
    ajouterProduitaupanier(updateUserDto: UpdateProduitDto, id: number, quantite: number): Promise<void>;
    supprimerProduitaupanier(updateUserDto: UpdateProduitDto, id: number, quantite: number): Promise<void>;
    rechercheParPanier(id: number): Promise<ProduitEntity[]>;
    removeUser(id: number): Promise<import("typeorm").UpdateResult>;
    recoverUtilisateur(id: number): Promise<void>;
}
