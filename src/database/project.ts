import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Developer } from './developer';
import { Unit } from './unit';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Developer, (developer) => developer.projects)
  developer: Developer;

  @OneToMany(() => Unit, (unit) => unit.project)
  units: Unit[];
}
