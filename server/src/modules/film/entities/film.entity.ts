import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 200, unique: true})
  name: string;

  @Column({ type: 'longtext', nullable: true})
  overview: string;

  @Column({ length: 200, nullable: true })
  artwork: string;

  @Column({ type: 'int', length: 11})
  year: number;

  @Column({ length: 10, nullable: true})
  idMovieDB: string;

  @Column({ length: 10, nullable: true})
  colour: string;
}