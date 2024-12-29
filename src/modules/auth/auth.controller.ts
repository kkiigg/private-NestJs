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
import { AuthService } from './auth.service';
import { UserService } from '@/modules/user/user.service';
import { err400, res200 } from '@/utils/resUtil';
import {
  AuthLoginWechatDto,
  AuthLoginAccountDto,
  AuthLoginPhoneDto,
  AuthLoginEmailDto,
  AuthRegistEmailDto,
  AuthRegistWechatDto,
  AuthRegistPhoneDto,
  AuthRegistAccountDto,
} from '@/entity/auth.dto';

import {
  ResEntity,
  ResPageEntity,
  PageRespondData,
  PageRequestEntity,
} from '@/entity/common/resEntity';
import { UserStatusEnum } from '@/enum/common.enum';
import { JwtService } from '@nestjs/jwt';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('loginAccount')
  @ApiResponse({
    status: 200,
    description: '账号登录',
  })
  async loginAccount(@Body() obj: AuthLoginAccountDto) {
    try {
      const { accessToken, err } = await this.authService.loginAccount(obj);
      if (err) {
        return err400(err);
      }
      return res200('ok', accessToken);
    } catch (e) {
      return err400('err');
    }
  }

  @Post('loginEmail')
  @ApiResponse({
    status: 200,
    description: '邮箱登录',
  })
  async loginEmail(@Body() obj: AuthLoginEmailDto) {
    try {
      const { accessToken, err } = await this.authService.loginEmail(obj);
      if (err) {
        return err400(err);
      }
      return res200('ok', accessToken);
    } catch (e) {
      return err400('err');
    }
  }

  @Post('loginWechat')
  @ApiResponse({
    status: 200,
    description: 'Wechat登录',
  })
  async loginWechat(@Body() obj: AuthLoginWechatDto) {
    try {
      const { accessToken, err } = await this.authService.loginWechat(obj);
      if (err) {
        return err400(err);
      }
      return res200('ok', accessToken);
    } catch (e) {
      return err400('err');
    }
  }

  @Post('loginPhone')
  @ApiResponse({
    status: 200,
    description: '电话号码登录',
  })
  async loginPhone(@Body() obj: AuthLoginPhoneDto) {
    try {
      const { accessToken, err } = await this.authService.loginPhone(obj);
      if (err) {
        return err400(err);
      }
      return res200('ok', accessToken);
    } catch (e) {
      return err400('err');
    }
  }

  @Post('registAccount')
  @ApiResponse({
    status: 200,
    description: '账号注册',
  })
  async registAccount(@Body() obj: AuthRegistAccountDto) {
    try {
      const { err } = await this.authService.registAccount(obj);
      if (err) {
        return err400(err);
      }
      return res200('ok');
    } catch (e) {
      return err400('err');
    }
  }

  @Post('registEmail')
  @ApiResponse({
    status: 200,
    description: '邮箱注册',
  })
  async registEmail(@Body() obj: AuthRegistEmailDto) {
    try {
      const { err } = await this.authService.registEmail(obj);
      if (err) {
        return err400(err);
      }
      return res200('ok');
    } catch (e) {
      console.error(e);
      return err400('err');
    }
  }

  @Post('registWechat')
  @ApiResponse({
    status: 200,
    description: '微信注册',
  })
  async registWechat(@Body() obj: AuthRegistWechatDto) {
    try {
      const { err } = await this.authService.registWechat(obj);
      if (err) {
        return err400(err);
      }
      return res200('ok');
    } catch (e) {
      console.error(e);
      return err400('err');
    }
  }

  @Post('registPhone')
  @ApiResponse({
    status: 200,
    description: '邮箱注册',
  })
  async registPhone(@Body() obj: AuthRegistPhoneDto) {
    try {
      const { err } = await this.authService.registPhone(obj);
      if (err) {
        return err400(err);
      }
      return res200('ok');
    } catch (e) {
      return err400('err');
    }
  }
}
