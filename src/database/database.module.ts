import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_SERVER,
      port: 1433,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      options: {
        enableArithAbort: true,
        encrypt: true,
        trustServerCertificate: true,
      },
      autoLoadEntities: true,
      dropSchema: true,
      synchronize: true,
      // synchronize: process.env.DB_SYNCHRONIZE,
    }),
  ],
})
export class DatabaseModule {}
