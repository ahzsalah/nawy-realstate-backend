import { Repository } from 'typeorm';
import { Unit } from './../database/unit';
import { ProjectsService } from 'src/projects/projects.service';
export declare class UnitsService {
    private unitsRepository;
    private readonly projectsService;
    constructor(unitsRepository: Repository<Unit>, projectsService: ProjectsService);
    add(unit: Unit, projectId: number): Promise<void>;
    findAll(): Promise<Unit[]>;
    findOne(id: number): Promise<Unit | null>;
    remove(id: number): Promise<void>;
}
