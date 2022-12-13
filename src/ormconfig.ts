import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'postgres',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrations: ['src/migrations/*.ts', 'dist/migrations/*{.ts,.js}'],
  cli: { migrationsDir: 'src/migrations' },
};

export default config;
