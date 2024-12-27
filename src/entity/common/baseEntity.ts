import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  create_datetime?: string;

  @Column({ nullable: true })
  update_datetime?: string;
}
