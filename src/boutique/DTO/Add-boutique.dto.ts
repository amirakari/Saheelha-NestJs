import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
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
  @Type(() => Number)
  @IsNumber()
  mapLat: number;
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  mapLng: number;
  @IsNotEmpty()
  @IsString()
  private _photo: string;
  @IsNotEmpty()
  @IsString()
  domaine: string;
  @IsNotEmpty()
  @IsEmail()
  mailprofessionnelle: string;
  @IsNotEmpty()
  @IsString()
  visite: string;

  set photo(value: string) {
    this._photo = value;
  }
}
