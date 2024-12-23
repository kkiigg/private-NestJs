import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private readonly users: UserDto[] = [];

  create(obj: UserDto) {
    this.users.push(obj);
  }

  findAll(): UserDto[] {
    return this.users;
  }

  findById(id: string): UserDto {
    return this.users.find((item) => item.id === id);
  }
}
