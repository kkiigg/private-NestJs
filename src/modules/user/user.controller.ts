import {
  Controller,
  Get,
  Bind,
  Param,
  Post,
  Delete,
  Body,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
// import { UserDto } from './dto/user.dto';
import { CUserEntity } from '@/entity/CUser.entity';
import { UserService } from './user.service';
import { err400, res200 } from '@/utils/resUtil';
import { ResEntity } from '@/entity/common/resEntity';

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
    // example: [new CUserEntity({ id: 'jack', name: 'ss' })],
  })
  async findAll() {
    return res200('ok', await this.userService.findAll());
  }

  @Get(':id')
  async findById(@Param() params) {
    const { id } = params;
    if (!id) {
      return err400('缺少id');
    }
    return res200('ok', await this.userService.findById(id));
  }

  @Post()
  async create(@Body() userDto: CUserEntity): Promise<ResEntity> {
    const res = await this.userService.create(userDto);
    console.log(res);
    return res200('ok');
  }
  @Delete('delete/:id')
  async drop(@Param() params): Promise<ResEntity> {
    const { id } = params;
    if (!id) {
      return err400('缺少id');
    }
    const res = await this.userService.delete(id);
    console.log(res);
    return res200('ok');
  }
}
