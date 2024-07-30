import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Developer } from './../database/developer';

@Injectable()
export class DevelopersService {
  constructor(
    @InjectRepository(Developer)
    private developersRepository: Repository<Developer>,
  ) {}

  async add(developer: Developer): Promise<void> {
    await this.developersRepository.save(developer);
  }

  findAll(): Promise<Developer[]> {
    return this.developersRepository.find({ relations: ['projects'] });
  }

  findOne(id: number): Promise<Developer | null> {
    return this.developersRepository.findOne({
      where: { id },
      relations: ['projects'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.developersRepository.delete(id);
  }
}
