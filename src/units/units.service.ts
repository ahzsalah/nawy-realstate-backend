import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unit } from './../database/unit';
import { ProjectsService } from 'src/projects/projects.service';

@Injectable()
export class UnitsService {
  constructor(
    @InjectRepository(Unit)
    private unitsRepository: Repository<Unit>,
    private readonly projectsService: ProjectsService,
  ) {}

  async add(unit: Unit, projectId: number): Promise<void> {
    let project = await this.projectsService.findOne(projectId);
    unit.project = project;
    await this.unitsRepository.save(unit);
  }

  findAll(): Promise<Unit[]> {
    return this.unitsRepository.find();
  }

  findOne(id: number): Promise<Unit | null> {
    return this.unitsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.unitsRepository.delete(id);
  }
}
