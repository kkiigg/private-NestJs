import {
  IsInt,
  Min,
  Max,
  IsEnum,
  Length,
  IsString,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { ToNumber } from '@/utils/validator';
import { GenderEnum, UserStatusEnum, UserRoleEnum } from '@/enum/common.enum';

export class CUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 24)
  name: string;

  @IsInt()
  @IsOptional()
  @Min(0)
  @Max(150)
  @ToNumber()
  age?: number;

  @IsEnum(GenderEnum)
  @IsOptional()
  // Z TODO 数字类型不加这个数字会被转为字符串，导致验证失败，太臃肿了！
  @ToNumber()
  gender: GenderEnum;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  wechat?: string;

  @IsEnum(UserStatusEnum)
  @IsOptional()
  @ToNumber()
  status: UserStatusEnum;

  @IsEnum(UserRoleEnum)
  @IsOptional()
  @ToNumber()
  role: UserRoleEnum;

  @IsString()
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  phone: string;
}
