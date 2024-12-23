export class ResponseEntity {
  msg?: string;
  code?: number;
  data?: any;
  constructor(msg?, code?, data?) {
    this.msg = msg;
    this.code = code;
    this.data = data;
  }
}
