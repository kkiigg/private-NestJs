import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CUserEntity } from '@/entity/CUser.entity';

@Injectable()
export class UserService {
  // private readonly users: CUserEntity[] = [];

  constructor(
    @InjectRepository(CUserEntity)
    private usersRepository: Repository<CUserEntity>,
  ) {}

  create(obj: CUserEntity) {
    // this.users.push(obj);
    console.log(obj, '??');
    return this.usersRepository.insert(obj);
  }

  findAll(): Promise<CUserEntity[]> {
    return this.usersRepository.find();
    // return this.users;
  }

  findById(id: string): Promise<CUserEntity> {
    return this.usersRepository.findOneBy({
      id,
    });
    // return this.users.find((item) => item.id === id);
  }
  delete(id: string) {
    this.usersRepository.remove({
      id,
    });
    // return this.users.find((item) => item.id === id);
  }
}
