import { Entity, Column } from 'typeorm';
import { GenderEnum, UserStatusEnum, UserRoleEnum } from '@/enum/common.enum';
import { BaseEntity } from './common/baseEntity';

// 不加nullable数据库链接会报错
@Entity('c_user')
export class CUserEntity extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({
    nullable: true,
  })
  age?: number;

  @Column({
    nullable: true,
  })
  gender?: number;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  wechat?: string;

  @Column({
    nullable: true,
  })
  status?: number;

  @Column({
    nullable: true,
  })
  role?: number;

  @Column({
    nullable: true,
  })
  password?: string;

  @Column({
    nullable: true,
  })
  email?: string;

  @Column({
    nullable: true,
  })
  phone?: string;
}
