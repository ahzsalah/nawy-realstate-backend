import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevelopersController } from './developers.controller';
import { Developer } from './../database/developer';

@Module({
  imports: [TypeOrmModule.forFeature([Developer])],
  providers: [DevelopersService],
  controllers: [DevelopersController],
  exports: [DevelopersService],
})
export class DevelopersModule {}
