import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsController } from './projects.controller';
import { Project } from './../database/project';
import { DevelopersService } from 'src/developers/developers.service';
import { Developer } from './../database/developer';

@Module({
  controllers: [ProjectsController],
  imports: [
    TypeOrmModule.forFeature([Project]),
    TypeOrmModule.forFeature([Developer]),
  ],
  providers: [ProjectsService, DevelopersService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
