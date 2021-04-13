import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsDecimal,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class AddBoutiqueDto {
  @IsNotEmpty()
  @IsString()
  nom: string;
  @IsNotEmpty()
  @IsString()
  adresse: string;
  @IsNotEmpty()
  @IsString()
  horaire: string;
  @IsNotEmpty()
  @IsString()
  facebook: string;
  @IsNotEmpty()
  @IsString()
  instagram: string;
  @IsNotEmpty()
  @Type(() => IsDecimal)
  @IsDecimal()
  mapLat: number;
  @IsNotEmpty()
  @Type(() => IsDecimal)
  @IsDecimal()
  mapLng: number;
  @IsNotEmpty()
  @IsString()
  domaine: string;
  @IsNotEmpty()
  @IsEmail()
  mailprofessionnelle: string;
}
