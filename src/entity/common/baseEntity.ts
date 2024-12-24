import { Column } from 'typeorm';

export class BaseEntity {
  @Column()
  create_datetime?: string;

  @Column()
  update_datetime?: string;
}
