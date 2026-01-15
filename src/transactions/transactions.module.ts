import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { DatabaseModule } from 'src/DB/database.providers';
import { collectionsProviders } from './collection.provider';

@Module({
  exports:[TransactionsService],
  imports: [DatabaseModule],
  controllers: [TransactionsController],
  providers: [TransactionsService, ...collectionsProviders],
})
export class TransactionsModule {}
