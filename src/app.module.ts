import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { HomeModule } from './modules/home/home.module';
import { UserModule } from './modules/user/user.module';
import { InfoModule } from './modules/info/info.module';
import { UserController } from './modules/user/user.controller';

import { AuthMiddleware } from './middlewares/auth.middleware';

import MySQLPlugin from '@/plugins/mysql';
import DotenvPlugin from '@/plugins/dotenv';

@Module({
  imports: [
    // DotEnv
    DotenvPlugin(),
    // MySQL
    MySQLPlugin(),
    // Modules
    HomeModule,
    UserModule,
    InfoModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(UserController);
  }
}
