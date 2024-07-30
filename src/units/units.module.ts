import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitsController } from './units.controller';
import { Unit } from './../database/unit';
import { Project } from 'src/database/project';
import { ProjectsService } from 'src/projects/projects.service';
import { Developer } from 'src/database/developer';
import { DevelopersService } from 'src/developers/developers.service';

@Module({
  controllers: [UnitsController],
  imports: [
    TypeOrmModule.forFeature([Unit]),
    TypeOrmModule.forFeature([Project]),
    TypeOrmModule.forFeature([Developer]),
  ],
  providers: [UnitsService, ProjectsService, DevelopersService],
  exports: [UnitsService],
})
export class UnitsModule {}
