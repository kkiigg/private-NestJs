import { Transform } from 'class-transformer';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

// Z TODO 转换(非验证，放在这个ts语义有问题)
// 文字太多，简洁一点
export function ToNumber() {
  return Transform(({ value }) => Number(value), { toClassOnly: true });
}

// 前端验证就好
@ValidatorConstraint({ name: 'checkPassword', async: false })
export class CheckPassword implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    // 规则 必须包含大写、小写字母、数字、特殊符号。长度8-50
    const reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,50}$/;
    return reg.test(text);
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return '密码规则错误（包含大小写）';
  }
}
