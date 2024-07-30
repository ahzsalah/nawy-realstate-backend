import { Repository } from 'typeorm';
import { Developer } from './../database/developer';
export declare class DevelopersService {
    private developersRepository;
    constructor(developersRepository: Repository<Developer>);
    add(developer: Developer): Promise<void>;
    findAll(): Promise<Developer[]>;
    findOne(id: number): Promise<Developer | null>;
    remove(id: number): Promise<void>;
}
