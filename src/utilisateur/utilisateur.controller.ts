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
import { UserEntity } from './entities/user.entity';
import { UtilisateurService } from './utilisateur.service';
import { AddUserDto } from './DTO/Add-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { LoginCredentialsDto } from './DTO/login-credentials.dto';
import { JwtAuthGuard } from '../Guards/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { PayloadInterface } from './interfaces/payload.interface';
import { JwtStrategy } from './strategy/passport-jwt.strategy';
import { Request } from 'express';
@Controller('utilisateur')
export class UtilisateurController {
  constructor(
    private userService: UtilisateurService,
    private userconnecte: JwtStrategy,
  ) {}
  @Get()
  async getAllcvs(): Promise<UserEntity[]> {
    return await this.userService.getUsers();
  }
  @Get('userconnecte')
  @UseGuards(JwtAuthGuard)
  async getuserconnecte(@Req() request: Request) {
    const user = request.user;
    return user;
  }
  @Post()
  async addCv(@Body() addCvDto: AddUserDto): Promise<UserEntity> {
    return this.userService.addCv(addCvDto);
  }
  @Post('login')
  async Login(@Body() credentials: LoginCredentialsDto) {
    return this.userService.login(credentials);
  }
  @Patch(':id')
  async updateCv(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserEntity> {
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
