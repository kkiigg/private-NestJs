export class ResEntity {
  msg?: string;
  code?: number;
  data?: any;

  constructor(msg?, code?, data?) {
    this.msg = msg;
    this.code = code;
    this.data = data;
  }
}
export class PageRequestEntity {
  page: number;
  pageSize: number;
}
export class PageRespondData<T> {
  page: number;
  total: number;
  data: Array<T>;
}
export class ResPageEntity<T> {
  msg?: string;
  code?: number;
  data?: PageRespondData<T>;

  constructor(msg?, code?, data?) {
    this.msg = msg;
    this.code = code;
    this.data = data;
  }
}
