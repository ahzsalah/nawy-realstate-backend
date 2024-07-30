import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from 'src/database/project';
import { DevelopersService } from 'src/developers/developers.service';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
    private readonly developersService: DevelopersService,
  ) {}

  async add(project: Project, devId: number): Promise<void> {
    let developer = await this.developersService.findOne(devId);
    project.developer = developer;
    await this.projectsRepository.save(project);
  }

  findAll(): Promise<Project[]> {
    return this.projectsRepository.find({ relations: ['developer', 'units'] });
  }

  findOne(id: number): Promise<Project | null> {
    return this.projectsRepository.findOne({
      where: { id },
      relations: ['developer', 'units'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.projectsRepository.delete(id);
  }
}
