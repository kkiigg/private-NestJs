import { HttpException, HttpStatus } from '@nestjs/common';
import { ResponseEntity } from '@/interfaces/responseEntity.interfece';

export const res200 = (msg?: string, data?: any) => {
  return new ResponseEntity(msg || 'success', HttpStatus.OK, data);
};

export const err400 = (msg?: string) => {
  // return new HttpException(msg || 'error', HttpStatus.BAD_REQUEST);
  return new ResponseEntity(msg || 'error', HttpStatus.BAD_REQUEST);
};

export const err401 = (msg?: string) => {
  // return new HttpException(
  //   msg || 'not auth',
  //   HttpStatus.NON_AUTHORITATIVE_INFORMATION,
  // );
  return new ResponseEntity(
    msg || 'not auth',
    HttpStatus.NON_AUTHORITATIVE_INFORMATION,
  );
};

export const err403 = () => {
  // return new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
  return new ResponseEntity('FORBIDDEN', HttpStatus.FORBIDDEN);
};

export const err = (msg: string, code: HttpStatus) => {
  // return new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
  return new ResponseEntity(msg, code);
};
