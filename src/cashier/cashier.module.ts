import { Module } from '@nestjs/common';
import { CashierController } from './cashier.controller';
import { CashierService } from './cashier.service';
import { Mongoose } from 'mongoose';
import { SaleSchema } from './schemas/sale.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CashierSchema } from './schemas/cashier.schema';
import { EarningSchema } from './schemas/earning.schema';
import { ExpenseSchema } from './schemas/expense.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sale', schema: SaleSchema }]),
    MongooseModule.forFeature([{ name: 'Cashier', schema: CashierSchema }]),
    MongooseModule.forFeature([{ name: 'Earning', schema: EarningSchema }]),
    MongooseModule.forFeature([{ name: 'Expense', schema: ExpenseSchema }]),
  ],
  controllers: [CashierController],
  providers: [CashierService]
})
export class CashierModule {}

3973218747