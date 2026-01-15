import { Module } from '@nestjs/common';
import { databaseProviders } from './database.modules';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}