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
  UseGuards,
} from '@nestjs/common';
import { ProduitService } from './produit.service';
import { ProduitEntity } from './entities/produit.entity';
import { AddProduitDto } from './DTO/Add-produit.dto';
import { UpdateProduitDto } from './DTO/update-produit.dto';
import { JwtAuthGuard } from '../Guards/jwt-auth.guard';
import { Request } from 'express';
import { BoutiqueService } from '../boutique/boutique.service';

@Controller('produit')
export class ProduitController {
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
  @UseGuards(JwtAuthGuard)
  async getproduitbyId(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProduitEntity[]> {
    return await this.userService.getProduitParBoutique(id);
  }
  @Get('boutique1/:id')
  @UseGuards(JwtAuthGuard)
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
