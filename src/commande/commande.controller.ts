import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CommandeService } from './commande.service';
import { CommandeEntity } from './entities/commande.entity';
import { AddCommandeDto } from './DTO/Add-commande.dto';
import { UpdateCommandeDto } from './DTO/update-commande.dto';
import { JwtAuthGuard } from '../Guards/jwt-auth.guard';
import { AddBoutiqueDto } from '../boutique/DTO/Add-boutique.dto';
import { Request } from 'express';
import { ProduitService } from '../produit/produit.service';

@Controller('commande')
export class CommandeController {
  constructor(
    private userService: CommandeService,
    private produitService: ProduitService,
  ) {}
  @Get(':id')
  async getAllcvs(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getUsers(id);
  }
  @Get('boutique/:id')
  async getCommandebyboutique(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommandebyboutique(id);
  }
  @Get('Mai/:id')
  async getCommandeEnMai(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommandeEnMai(id);
  }
  @Get('Janvier/:id')
  async getCommandeEnJanvier(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommandeEnJanvier(id);
  }
  @Get('Fevrier/:id')
  async getCommandeEnFevier(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommandeEnFevrier(id);
  }
  @Get('Mars/:id')
  async getCommandeEnMars(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommandeEnMars(id);
  }
  @Get('Avril/:id')
  async getCommandeEnAvril(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommandeEnAvril(id);
  }
  @Get('Juin/:id')
  async getCommandeEnJuin(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommandeEnJuin(id);
  }
  @Get('Juillet/:id')
  async getCommandeEnJuillet(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommandeEnJuillet(id);
  }
  @Get('Aout/:id')
  async getCommandeEnAout(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommandeEnAout(id);
  }
  @Get('Septembre/:id')
  async getCommandeEnSeptembre(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommandeEnSeptembre(id);
  }
  @Get('Octobre/:id')
  async getCommandeEnOctobre(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommandeEnOctobre(id);
  }
  @Get('Novembre/:id')
  async getCommandeEnNovembre(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommandeEnNovembre(id);
  }
  @Get('Decembre/:id')
  async getCommandeEnDecembre(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getCommandeEnDecembre(id);
  }
  @Get('get/:id')
  async getCommandeById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findById(id);
  }
  @Post(':quantite/:id')
  @UseGuards(JwtAuthGuard)
  async addCv(
    @Body() addCvDto: AddCommandeDto,
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number,
    @Param('quantite', ParseIntPipe) quantite: number,
  ): Promise<CommandeEntity> {
    const user = request.user;
    const boutique = await this.produitService.findById(id);
    addCvDto.prixtotale = quantite * boutique.prixavecremise;
    console.log(addCvDto.prixtotale);
    return this.userService.addCv(addCvDto, user, quantite, boutique);
  }
  @Patch(':id')
  async updateCv(
    @Body() updateUserDto: UpdateCommandeDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CommandeEntity> {
    return await this.userService.updateCv(id, updateUserDto);
  }
  @Delete(':id')
  async removeUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.softDeleteUser(id);
  }
  @Get('/recover/:id')
  async recoverUtilisateur(@Param('id', ParseIntPipe) id: number) {
    this.userService.restoreUtilisateur(id);
  }
}
