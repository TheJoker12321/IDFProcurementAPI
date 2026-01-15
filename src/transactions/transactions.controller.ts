import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';


@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('/purchase')
  purchase(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.purchase(createTransactionDto);
  }

}
