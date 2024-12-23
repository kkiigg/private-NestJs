import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HomeModule } from './modules/home/home.module';
import { UserModule } from './modules/user/user.module';
import { InfoModule } from './modules/info/info.module';

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
export class AppModule {}
