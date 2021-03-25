import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class AddAbonnementDto {
  @IsNotEmpty()
  @IsString()
  private _durée: string;
  @IsNotEmpty()
  @IsString()
  private _status: string;
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  private _prix: number;
}
