import { Module } from '@nestjs/common';
import { LiensController } from './modules/liens/liens.controller';
import { LiensService } from './modules/liens/liens.service';

@Module({
  controllers: [LiensController],
  providers: [LiensService],
  exports: [LiensService],
})
export class LienModule {}