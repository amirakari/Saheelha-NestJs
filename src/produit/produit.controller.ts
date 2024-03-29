import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProduitService } from './produit.service';
import { ProduitEntity } from './entities/produit.entity';
import { AddProduitDto } from './DTO/Add-produit.dto';
import { UpdateProduitDto } from './DTO/update-produit.dto';
import { JwtAuthGuard } from '../Guards/jwt-auth.guard';
import { Request } from 'express';
import { BoutiqueService } from '../boutique/boutique.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UpdateBoutiqueDto } from '../boutique/DTO/update-boutique.dto';
import { User } from '../decorators/user.decorator';
import { MulterModule } from '@nestjs/platform-express';
import { Observable, of } from 'rxjs';
import { join } from 'path';
@Controller('produit')
export class ProduitController {
  i: number;
  constructor(
    private userService: ProduitService,
    private boutiqueService: BoutiqueService,
  ) {}
  @Get()
  async getAllcvs(): Promise<ProduitEntity[]> {
    return await this.userService.getUsers();
  }
  @Get('recherche')
  async rechercheParNom(@Query('nom') nom: string) {
    if (nom == null || nom == undefined) {
      return await this.userService.getUsers();
    } else {
      return this.userService.rechercheParNom(nom);
    }
  }
  @Get('recherche3')
  async rechercheParLocalisation(@Query('adresse') adresse: string) {
    if (adresse === null || adresse === undefined) {
      return await this.userService.getUsers();
    } else {
      return this.userService.rechercheParLocalisation(adresse);
    }
  }
  @Get('recherche1')
  async recherchePartype(@Query('type') type: string) {
    if (type == null || type == undefined) {
      return await this.userService.getUsers();
    } else {
      return this.userService.recherchePartype(type);
    }
  }
  @Get('recherche2')
  async rechercheParStatus(@Query('status') status: string) {
    if (status == null || status == undefined) {
      return await this.userService.getUsers();
    } else {
      return this.userService.rechercheParStatus(status);
    }
  }
  @Get('/:id')
  async getProduitbyId(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findById(id);
  }
  @Get('boutique/:id')
  async getproduitbyId(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProduitEntity[]> {
    return await this.userService.getProduitParBoutique(id);
  }
  @Post('upload/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/imagesproduit',
      }),
    }),
  )
  uploadfile(
    @UploadedFile() file: Express.Multer.File,
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateProduitDto,
    @User() user,
  ): Promise<any> {
    updateUserDto.photo1 = file.filename;
    console.log(updateUserDto);
    return this.userService.updateCv(id, updateUserDto);
  }
  @Get('image/:image')
  findProfileImage(@Res() res, @Param('image') image): Observable<any> {
    return of(
      res.sendFile(join(process.cwd(), 'uploads/imagesproduit/' + image)),
    );
  }
  @Get('boutique1/:id')
  async getproduitbyId1(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProduitEntity[]> {
    return await this.userService.getProduitParBoutiqueDon(id);
  }
  @Post(':codeabare/:id')
  @UseGuards(JwtAuthGuard)
  async addCv(
    @Body() addCvDto: AddProduitDto,
    @Param('codeabare', ParseIntPipe) codeabare: number,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProduitEntity> {
    const boutique = await this.boutiqueService.findById(id);
    console.log(boutique);
    return this.userService.addCv(addCvDto, codeabare, boutique);
  }
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateCv(
    @Body() updateUserDto: UpdateProduitDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProduitEntity> {
    return await this.userService.updateCv(id, updateUserDto);
  }
  @Patch('panier/:id/:quantite')
  @UseGuards(JwtAuthGuard)
  async ajouterProduitaupanier(
    @Body() updateUserDto: UpdateProduitDto,
    @Param('id', ParseIntPipe) id: number,
    @Param('quantite', ParseIntPipe) quantite: number,
  ) {
    const produit = await this.userService.findById(id);
    produit.quantite = produit.quantite - quantite;
    updateUserDto.quantite = produit.quantite;
    console.log(updateUserDto.quantite);
    await this.userService.updateCv(id, updateUserDto);
  }
  @Patch(':id/:quantite')
  @UseGuards(JwtAuthGuard)
  async supprimerProduitaupanier(
    @Body() updateUserDto: UpdateProduitDto,
    @Param('id', ParseIntPipe) id: number,
    @Param('quantite', ParseIntPipe) quantite: number,
  ) {
    const produit = await this.userService.findById(id);
    produit.quantite = produit.quantite + quantite;
    updateUserDto.quantite = produit.quantite;
    console.log(updateUserDto.quantite);
    await this.userService.updateCv(id, updateUserDto);
  }
  @Get('amir/:id')
  async rechercheParPanier(@Param('id', ParseIntPipe) id: number) {
    console.log('amir');
    return this.userService.findByPanierId(id);
    console.log('akari');
  }
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async removeUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.softDeleteUser(id);
  }
  @Get('/recover/:id')
  @UseGuards(JwtAuthGuard)
  async recoverUtilisateur(@Param('id', ParseIntPipe) id: number) {
    this.userService.restoreUtilisateur(id);
  }
}
