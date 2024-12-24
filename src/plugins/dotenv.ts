import { ConfigModule } from '@nestjs/config';

export default function () {
  return ConfigModule.forRoot({
    envFilePath: [`.env.${process.env.NODE_ENV || 'development'}`],
    isGlobal: true,
  });
}
