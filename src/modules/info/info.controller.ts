import { Controller, Get, Request } from '@nestjs/common';

@Controller('info')
export class InfoController {
  @Get()
  // 获取请求头示例
  // getInfo(@Request() request: Request): string {
  getInfo(@Request() request: Request): string {
    console.log(request);
    return 'info';
  }
}
