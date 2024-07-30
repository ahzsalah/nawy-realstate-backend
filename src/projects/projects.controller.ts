import { Controller, Get, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ApiTags } from '@nestjs/swagger';
import { Project } from 'src/database/project';

@ApiTags('/projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('/add')
  add(@Query('name') name: string, @Query('developer id') devId?: number) {
    const newProject = new Project();
    newProject.name = name;
    this.projectsService.add(newProject, devId);
  }

  @Get('/get')
  get(@Query('id') id: number) {
    return this.projectsService.findOne(id);
  }

  @Get('/getAll')
  getAll() {
    return this.projectsService.findAll();
  }

  @Get('/delete')
  delete(@Query('id') id: number) {
    this.projectsService.remove(id);
  }
}
