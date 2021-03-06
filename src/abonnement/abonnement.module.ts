import { Module } from '@nestjs/common';
import { AbonnementController } from './abonnement.controller';
import { AbonnementService } from './abonnement.service';

@Module({
  controllers: [AbonnementController],
  providers: [AbonnementService]
})
export class AbonnementModule {}
