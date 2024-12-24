import { HttpException, HttpStatus } from '@nestjs/common';
import { ResEntity } from '@/entity/common/resEntity';

export const res200 = (msg?: string, data?: any) => {
  return new ResEntity(msg || 'success', HttpStatus.OK, data);
};

export const err400 = (msg?: string) => {
  // return new HttpException(msg || 'error', HttpStatus.BAD_REQUEST);
  return new ResEntity(msg || 'error', HttpStatus.BAD_REQUEST);
};

export const err401 = (msg?: string) => {
  // return new HttpException(
  //   msg || 'not auth',
  //   HttpStatus.NON_AUTHORITATIVE_INFORMATION,
  // );
  return new ResEntity(
    msg || 'not auth',
    HttpStatus.NON_AUTHORITATIVE_INFORMATION,
  );
};

export const err403 = () => {
  // return new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
  return new ResEntity('FORBIDDEN', HttpStatus.FORBIDDEN);
};

export const err = (msg: string, code: HttpStatus) => {
  // return new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
  return new ResEntity(msg, code);
};
