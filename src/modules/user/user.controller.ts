import {
  Controller,
  Bind,
  Param,
  Get,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';

import { ValidationPipe } from '@/utils/validation.pipe';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
// import { UserDto } from './dto/user.dto';
// import { CUserEntity } from '@/entity/CUser.entity';
import { CUserDto } from '@/entity/cUser.dto';
import { CUserEntity } from '@/entity/cUser.entity';
import { UserService } from './user.service';
import { err400, res200 } from '@/utils/resUtil';
import {
  ResEntity,
  ResPageEntity,
  PageRespondData,
  PageRequestEntity,
} from '@/entity/common/resEntity';
import { UserStatusEnum } from '@/enum/common.enum';

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

  @Get('pageAll')
  @ApiResponse({
    status: 200,
    description: '获取用户所有列表分页',
    // example: [new CUserEntity({ id: 'jack', name: 'ss' })],
  })
  async pageAll(
    @Body()
    pageReqEnt: {
      page: number;
      pageSize: number;
      role: number;
    },
  ) {
    try {
      const { page, pageSize, role } = pageReqEnt;
      const [pageResult, total] = await this.userService.page(
        page,
        pageSize,
        role,
      );
      const pageData: PageRespondData<CUserEntity> = {
        page,
        data: pageResult,
        total,
      };
      const res = new ResPageEntity<CUserEntity>({
        msg: 'ok',
        data: pageData,
        code: 200,
      });
      return res200('ok', res);
    } catch (e) {
      return err400('err');
    }
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
  async create(
    @Body(new ValidationPipe()) userDto: CUserDto,
  ): Promise<ResEntity> {
    try {
      // 验证dot
      await this.userService.create(userDto);
      return res200('ok');
    } catch (e) {
      return err400(e);
    }
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) userDto: CUserDto,
  ): Promise<ResEntity> {
    try {
      console.log(id, userDto, '???');

      await this.userService.update(id, userDto);
      return res200('ok');
    } catch (e) {
      return err400(e);
    }
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

  @Put('disabledById/:id')
  @ApiResponse({
    status: 200,
    description: '禁用某个用户',
  })
  async disableById(@Param('id') id: string): Promise<ResEntity> {
    if (!id) {
      return err400('缺少id');
    }
    await this.userService.updateMap(id, {
      status: UserStatusEnum.disabled,
    });
    return res200('ok');
  }
}
