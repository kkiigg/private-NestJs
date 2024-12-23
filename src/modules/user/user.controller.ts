import { Controller, Get, Bind, Param, Post, Body } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { UserService } from './user.service';
// import { err400 } from '../../utils/error';

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
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param() params): Promise<UserDto> {
    const { id } = params;
    // if (id == 1) {
    //   throw err400('缺少id');
    // }
    return this.userService.findById(id);
  }

  @Post()
  async create(@Body() userDto: UserDto) {
    this.userService.create(userDto);
  }
}
