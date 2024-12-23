import { HttpException, HttpStatus } from '@nestjs/common';

export const err400 = (msg?: string) => {
  return new HttpException(msg || 'error', HttpStatus.BAD_REQUEST);
};

export const err401 = (msg?: string) => {
  return new HttpException(
    msg || 'not auth',
    HttpStatus.NON_AUTHORITATIVE_INFORMATION,
  );
};

export const err403 = () => {
  return new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
};
