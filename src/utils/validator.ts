import { Transform } from 'class-transformer';

// 文字太多，简洁一点
export function ToNumber() {
  return Transform(({ value }) => Number(value), { toClassOnly: true });
}
