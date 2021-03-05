import { Module } from '@nestjs/common';
import { ListefavorisController } from './listefavoris.controller';
import { ListefavorisService } from './listefavoris.service';

@Module({
  controllers: [ListefavorisController],
  providers: [ListefavorisService]
})
export class ListefavorisModule {}
