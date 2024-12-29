import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CUserEntity } from '@/entity/cUser.entity';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '@/modules/user/user.service';
import { CUserDto } from '@/entity/cUser.dto';

import {
  AuthLoginWechatDto,
  AuthLoginAccountDto,
  AuthLoginPhoneDto,
  AuthLoginEmailDto,
  AuthRegistEmailDto,
  AuthRegistWechatDto,
  AuthRegistPhoneDto,
  AuthRegistAccountDto,
} from '@/entity/auth.dto';

function generateToken() {}
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(CUserEntity)
    private userRepository: Repository<CUserEntity>,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  private jwtSign(username, id) {
    const payload = { username, sub: id };
    return this.jwtService.sign(payload);
  }

  // 登录
  async loginAccount(obj: AuthLoginAccountDto) {
    let err;
    const { name, password } = obj;
    const userExists = await this.userService.findBy(name);
    if (!userExists) {
      return {
        err: '用户不存在',
      };
    }
    const { id } = userExists;
    if (password !== userExists.password) {
      return {
        err: '密码错误',
      };
    }

    const accessToken = this.jwtSign(name, id);

    return { accessToken, err };
  }

  async loginEmail(obj: AuthLoginEmailDto) {
    let err;
    const { email } = obj;
    const userExists = await this.userRepository.findOne({ where: { email } });
    if (!userExists) {
      return {
        err: '用户不存在',
      };
    }
    const { id } = userExists;
    // Z TODO 邮箱验证
    const accessToken = this.jwtSign(name, id);
    return { accessToken, err };
  }
  async loginWechat(obj: AuthLoginWechatDto) {
    let err;
    const { wechat } = obj;
    const userExists = await this.userRepository.findOne({ where: { wechat } });
    if (!userExists) {
      return {
        err: '用户不存在',
      };
    }
    const { id } = userExists;
    // Z TODO wechat验证
    const accessToken = this.jwtSign(name, id);
    return { accessToken, err };
  }
  async loginPhone(obj: AuthLoginPhoneDto) {
    let err;
    const { phone } = obj;
    const userExists = await this.userRepository.findOne({ where: { phone } });
    if (!userExists) {
      return {
        err: '用户不存在',
      };
    }
    const { id } = userExists;
    // Z TODO 手机验证
    const accessToken = this.jwtSign(name, id);
    return { accessToken, err };
  }
  // 注册
  private async registCommon({
    name,
    wechat,
    phone,
    email,
    password,
  }: {
    name?: string;
    wechat?: string;
    phone?: string;
    email?: string;
    password?: string;
  }) {
    const userExists = await this.userRepository.findOne({
      where: { name, wechat, phone, email },
    });
    console.log(name, wechat, phone, email, userExists);
    if (userExists) {
      return {
        err: '用户已存在',
      };
    }
    const dto = new CUserDto();
    dto.name = name || wechat || phone || email; // Z TODO 将来可能有问题
    dto.wechat = wechat;
    dto.phone = phone;
    dto.email = email;
    dto.password = password;

    await this.userService.create(dto);
    return { err: null };
  }

  async registAccount(obj: AuthRegistAccountDto) {
    const { name, password } = obj;
    const { err } = await this.registCommon({ name, password });
    return {
      err,
    };
  }

  async registEmail(obj: AuthRegistEmailDto) {
    const { email, password } = obj;
    const { err } = await this.registCommon({ email, password });
    return {
      err,
    };
  }

  async registWechat(obj: AuthRegistWechatDto) {
    const { wechat, password } = obj;
    const { err } = await this.registCommon({ wechat, password });
    return {
      err,
    };
  }
  async registPhone(obj: AuthRegistPhoneDto) {
    const { phone, password } = obj;
    const { err } = await this.registCommon({ phone, password });
    return {
      err,
    };
  }
}
