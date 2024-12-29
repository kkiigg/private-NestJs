import { TypeOrmModule } from '@nestjs/typeorm';
import { CUserEntity } from '@/entity/cUser.entity';

export default async function () {
  const {
    DATABASE_HOST: host,
    DATABASE_PORT: port,
    DATABASE_USER: username,
    DATABASE_PASSWORD: password,
    DATABASE_NAME: database,
  } = process.env;

  return TypeOrmModule.forRoot({
    type: 'mysql',
    host,
    port: Number(port),
    username,
    password,
    database,
    entities: [CUserEntity],
    // entities: ['entity/*.entity.ts'],
    // entities: ['entity/**/*.entity.ts'],
    synchronize: true,
    // autoLoadEntities:true
  });
}
