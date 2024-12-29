import {
  IsInt,
  Min,
  Max,
  IsEnum,
  Length,
  IsString,
  IsOptional,
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
} from 'class-validator';
import { ToNumber } from '@/utils/validator';
import { GenderEnum, UserStatusEnum, UserRoleEnum } from '@/enum/common.enum';

const minPswLen = 8;
const maxPswLen = 50;

// 登录
class AuthLoginCommonDto {
  // 验证码
  @IsString()
  @IsNotEmpty()
  validateCode: string;
}

class AuthLoginCodeDto extends AuthLoginCommonDto {
  // 验证码
  @IsString()
  @IsNotEmpty()
  validateCode: string;
}

export class AuthLoginAccountDto extends AuthLoginCommonDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 24)
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class AuthLoginEmailDto extends AuthLoginCodeDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class AuthLoginPhoneDto extends AuthLoginCodeDto {
  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;
}
export class AuthLoginWechatDto extends AuthLoginCodeDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 24)
  wechat: string;
}
// 注册
class AuthRegistCommonDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 24)
  name: string;
}

export class AuthRegistAccountDto extends AuthRegistCommonDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 24)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 50)
  password?: string;
}

export class AuthRegistWechatDto extends AuthRegistCommonDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 24)
  wechat: string;

  @IsNotEmpty()
  password?: string;
}

export class AuthRegistEmailDto extends AuthRegistCommonDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail() // Z TODO 验证无效
  email: string;

  @IsString()
  @IsNotEmpty()
  password?: string;
}

export class AuthRegistPhoneDto extends AuthRegistCommonDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 24)
  phone: string;

  @IsString()
  @IsNotEmpty()
  password?: string;
}
