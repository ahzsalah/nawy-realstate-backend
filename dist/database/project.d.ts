import { Developer } from './developer';
import { Unit } from './unit';
export declare class Project {
    id: number;
    name: string;
    developer: Developer;
    units: Unit[];
}
