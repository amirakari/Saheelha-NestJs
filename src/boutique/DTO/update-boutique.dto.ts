import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateBoutiqueDto {
  @IsOptional()
  id: number;
  @IsOptional()
  @IsString()
  nom: string;
  @IsOptional()
  @IsString()
  adresse: string;
  @IsOptional()
  @IsString()
  horaire: string;
  @IsOptional()
  @IsString()
  facebook: string;
  @IsOptional()
  @IsString()
  instagram: string;
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  mapLat: number;
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  mapLng: number;
  @IsOptional()
  @IsString()
  photo: string;
  @IsOptional()
  @IsString()
  domaine: string;
  @IsOptional()
  @IsString()
  type: string;
  @IsOptional()
  @IsEmail()
  mailprofessionnelle: string;
  @IsOptional()
  @IsString()
  visite: string;
}
