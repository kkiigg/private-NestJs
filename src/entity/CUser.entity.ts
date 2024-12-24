import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { GenderEnum, UserStatusEnum, UserRoleEnum } from '@/enum/common.enum';

@Entity('c_user')
export class CUserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 24 })
  name?: string;

  @Column({
    type: 'int',
    width: 3,
  })
  age?: number;

  @Column({
    type: 'enum',
    enum: GenderEnum,
    default: GenderEnum.male,
  })
  gender?: number;

  @Column()
  address?: string;

  @Column()
  wechat?: string;

  @Column({
    type: 'enum',
    enum: UserStatusEnum,
    default: UserStatusEnum.normal,
  })
  status?: number;

  @Column({
    type: 'enum',
    enum: UserRoleEnum,
    default: UserRoleEnum.consumer,
  })
  role?: number;
}
