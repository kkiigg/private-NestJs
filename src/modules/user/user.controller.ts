import {
  Controller,
  Get,
  Bind,
  Param,
  Post,
  Body,
  HttpException,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { err400, res200 } from '@/utils/resUtil';
import { ResponseEntity } from '@/interfaces/responseEntity.interfece';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('test')
  @Bind(Param())
  test(): string {
    return 'test';
  }

  @Get('getAll')
  @ApiResponse({
    status: 200,
    description: '获取用户所有列表',
    example: [new UserDto({ id: 'jack', name: 'ss' })],
  })
  async findAll() {
    // return this.userService.findAll();
    return res200('ok', this.userService.findAll());
  }

  @Get(':id')
  async findById(@Param() params) {
    const { id } = params;
    return res200('ok', this.userService.findById(id));
  }

  @Post()
  async create(@Body() userDto: UserDto): Promise<ResponseEntity> {
    this.userService.create(userDto);
    return res200('ok');
  }
}
