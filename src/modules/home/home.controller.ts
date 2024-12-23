import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get('info')
  findAll(): string {
    return 'home info';
  }
}
