import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get('info')
  findAll(): string {
    return 'This action returns all homes';
  }
}
