import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, In } from 'typeorm';
import { CUserEntity } from '@/entity/cUser.entity';
import { CUserDto } from '@/entity/cUser.dto';
import { GenderEnum, UserStatusEnum, UserRoleEnum } from '@/enum/common.enum';

@Injectable()
export class UserService {
  // private readonly users: CUserEntity[] = [];

  constructor(
    @InjectRepository(CUserEntity)
    private usersRepository: Repository<CUserEntity>,
  ) {}

  async findAll(): Promise<CUserEntity[]> {
    // return this.usersRepository.find();
    return this.usersRepository.query('SELECT * FROM c_user');

    // return this.users;
  }
  async findBy(name: string): Promise<CUserEntity> {
    return this.usersRepository.findOne({
      where: {
        name,
      },
    });
  }
  async page(
    pageIndex: number,
    pageSize: number,
    role: number,
  ): Promise<[CUserEntity[], number]> {
    // return this.usersRepository.find();
    // const start = pageIndex * pageSize;
    // const end = pageIndex * pageSize;

    // return this.usersRepository.query(
    //   `SELECT * FROM c_user limit ${start},${end}`,
    // );

    // return this.users;

    const skip = (pageIndex - 1) * pageSize;
    console.log(skip, '???', pageIndex, pageSize);

    const [users, total] = await this.usersRepository.findAndCount({
      skip: skip,
      take: pageSize,
      where: {
        status: In([UserStatusEnum.normal]),
        role,
      },
      order: {
        name: 'ASC',
      },
    });
    console.log(users, total, pageSize, pageIndex, '???');
    return [users, total];
  }

  findById(id: string): Promise<CUserEntity> {
    return this.usersRepository.findOneBy({
      id,
    });
    // return this.users.find((item) => item.id === id);
  }

  create(obj: CUserDto) {
    // this.users.push(obj);

    return this.usersRepository.insert(obj);
  }
  update(id: string, obj: CUserDto) {
    return this.usersRepository.update(id, obj);
  }
  async updateMap(id: string, map: Record<string, any>) {
    const user = await this.findById(id);
    console.log('??', user, map);
    if (user) {
      for (const key in map) {
        user[key] = map[key];
      }
      console.log('??-', user);
      await this.usersRepository.save(user); // 保存实体
    } else {
      throw new Error('User not found');
    }
  }

  delete(id: string) {
    this.usersRepository.delete(id);
    // return this.users.find((item) => item.id === id);
  }
}
