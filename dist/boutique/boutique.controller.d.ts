/// <reference types="multer" />
import { BoutiqueService } from './boutique.service';
import { BoutiqueEntity } from './entities/boutique.entity';
import { AddBoutiqueDto } from './DTO/Add-boutique.dto';
import { UpdateBoutiqueDto } from './DTO/update-boutique.dto';
import { Request } from 'express';
import { Observable } from 'rxjs';
export declare class BoutiqueController {
    private boutiqueService;
    constructor(boutiqueService: BoutiqueService);
    getAllcvs(): Promise<BoutiqueEntity[]>;
    getboutiquebyuser(id: number): Promise<BoutiqueEntity[]>;
    addCv(addCvDto: AddBoutiqueDto, request: Request): Promise<BoutiqueEntity>;
    updateCv(updateUserDto: UpdateBoutiqueDto, id: number, user: any): Promise<BoutiqueEntity>;
    uploadfile(file: Express.Multer.File, request: Request, id: number, updateUserDto: UpdateBoutiqueDto, user: any): Promise<any>;
    findProfileImage(res: any, image: any, request: Request): Observable<any>;
    removeUser(id: number, user: any): Promise<import("typeorm").UpdateResult | import("@nestjs/common").UnauthorizedException>;
    recoverUtilisateur(id: number, user: any): Promise<void>;
    getBoutique(id: any): Promise<BoutiqueEntity>;
}
