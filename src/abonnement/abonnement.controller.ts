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

@Controller('abonnement')
export class AbonnementController {
  constructor(private userService: AbonnementService) {}
  @Get()
  async getAllcvs(): Promise<AbonnementEntity[]> {
    return await this.userService.getUsers();
  }
  @Post('abo1')
  @UseGuards(JwtAuthGuard)
  async addCv10(): Promise<InsertResult> {
    return await this.userService.addCv1();
  }
  @Post('abo2')
  @UseGuards(JwtAuthGuard)
  async addCv20(): Promise<InsertResult> {
    return await this.userService.addCv2();
  }
  @Post('abo3')
  @UseGuards(JwtAuthGuard)
  async addCv100(): Promise<InsertResult> {
    return await this.userService.addCv3();
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
}
