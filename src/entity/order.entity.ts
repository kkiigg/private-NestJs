import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CORderEntity {
  @PrimaryGeneratedColumn('uuid')
  @Column()
  id: string;

  @Column()
  user_id: string;

  @Column()
  create_datetime?: string;

  @Column()
  gender?: number;

  @Column()
  address?: string;

  @Column()
  wechat?: string;
}
