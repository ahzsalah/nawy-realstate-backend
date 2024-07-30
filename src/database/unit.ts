import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from './project';

@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bathrooms: number;

  @Column()
  bedrooms: number;

  @Column()
  area: string;

  @ManyToOne(() => Project, (project) => project.units)
  project: Project;
}
