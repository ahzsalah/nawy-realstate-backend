import { ProjectsService } from './projects.service';
import { Project } from 'src/database/project';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    add(name: string, devId?: number): void;
    get(id: number): Promise<Project>;
    getAll(): Promise<Project[]>;
    delete(id: number): void;
}
