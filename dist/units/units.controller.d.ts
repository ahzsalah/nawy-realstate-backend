import { UnitsService } from './units.service';
import { Unit } from 'src/database/unit';
export declare class UnitsController {
    private readonly unitsService;
    constructor(unitsService: UnitsService);
    add(name: string, bathrooms: number, bedrooms: number, area: string, projectId: number): void;
    get(id: number): Promise<Unit>;
    getAll(): Promise<Unit[]>;
    delete(id: number): void;
}
