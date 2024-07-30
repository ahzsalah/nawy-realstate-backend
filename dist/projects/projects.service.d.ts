import { Repository } from 'typeorm';
import { Project } from 'src/database/project';
import { DevelopersService } from 'src/developers/developers.service';
export declare class ProjectsService {
    private projectsRepository;
    private readonly developersService;
    constructor(projectsRepository: Repository<Project>, developersService: DevelopersService);
    add(project: Project, devId: number): Promise<void>;
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project | null>;
    remove(id: number): Promise<void>;
}
