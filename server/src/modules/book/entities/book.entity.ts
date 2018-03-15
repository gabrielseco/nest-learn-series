import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 200, unique: true})
  name: string;

  @Column({ type: 'longtext', nullable: true})
  overview: string;

  @Column({ length: 200, nullable: true })
  artwork: string;

  @Column({ length: 200, nullable: true })
  youtube: string;

  @Column({ length: 20, nullable: true })
  airdate: string;

  @Column({ length: 10, nullable: true})
  colour: string;
}