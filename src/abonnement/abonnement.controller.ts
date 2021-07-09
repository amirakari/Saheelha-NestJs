import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AbonnementService } from './abonnement.service';
import { AbonnementEntity } from './entities/abonnement.entity';
import { AddAbonnementDto } from './DTO/Add-abonnement.dto';
import { UpdateAbonnementDto } from './DTO/update-abonnement.dto';
import { JwtAuthGuard } from '../Guards/jwt-auth.guard';
import { InsertResult } from 'typeorm';
import { BoutiqueService } from '../boutique/boutique.service';
import { ProduitEntity } from '../produit/entities/produit.entity';

@Controller('abonnement')
export class AbonnementController {
  constructor(
    private userService: AbonnementService,
    private boutiqueService: BoutiqueService,
  ) {}
  @Get()
  async getAllcvs(): Promise<AbonnementEntity[]> {
    return await this.userService.getUsers();
  }
  @Post('abo1/:id')
  @UseGuards(JwtAuthGuard)
  async addCv10(@Param('id', ParseIntPipe) id: number): Promise<InsertResult> {
    const boutique = await this.boutiqueService.findById(id);
    console.log(boutique);
    return await this.userService.addCv1(boutique);
  }
  @Post('abo2/:id')
  @UseGuards(JwtAuthGuard)
  async addCv20(@Param('id', ParseIntPipe) id: number): Promise<InsertResult> {
    const boutique = await this.boutiqueService.findById(id);
    console.log(boutique);
    return await this.userService.addCv2(boutique);
  }
  @Post('abo3/:id')
  @UseGuards(JwtAuthGuard)
  async addCv100(@Param('id', ParseIntPipe) id: number): Promise<InsertResult> {
    const boutique = await this.boutiqueService.findById(id);
    console.log(boutique);
    return await this.userService.addCv3(boutique);
  }
  @Patch(':id')
  async updateCv(
    @Body() updateUserDto: UpdateAbonnementDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<AbonnementEntity> {
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
  @Get('boutique/:id')
  async getproduitbyId(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<AbonnementEntity[]> {
    return await this.userService.getAboParBoutique(id);
  }
  @Patch('paymee/:id')
  async PayeAbo(
    @Body() updateUserDto: UpdateAbonnementDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<AbonnementEntity> {
    updateUserDto.status = 'payé';
    return await this.userService.PayeAbo(id, updateUserDto);
  }
}
