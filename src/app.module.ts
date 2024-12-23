import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HomeModule } from './modules/home/home.module';
import { UserModule } from './modules/user/user.module';
import { InfoModule } from './modules/info/info.module';
import { UserController } from './modules/user/user.controller';

import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  imports: [
    // dotenv
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV || 'development'}`],
      isGlobal: true,
    }),
    // modules
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
