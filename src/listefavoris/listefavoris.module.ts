import { Module } from '@nestjs/common';
import { ListefavorisController } from './listefavoris.controller';
import { ListefavorisService } from './listefavoris.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PanierEntity } from './entities/panier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PanierEntity])],
  controllers: [ListefavorisController],
  providers: [ListefavorisService],
})
export class ListefavorisModule {}
