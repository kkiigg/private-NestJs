import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CUserEntity } from '@/entity/CUser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CUserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
