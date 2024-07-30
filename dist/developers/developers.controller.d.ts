import { DevelopersService } from './developers.service';
import { Developer } from 'src/database/developer';
export declare class DevelopersController {
    private readonly developersService;
    constructor(developersService: DevelopersService);
    add(name: string): void;
    get(id: number): Promise<Developer>;
    getAll(): Promise<Developer[]>;
    delete(id: number): void;
}
