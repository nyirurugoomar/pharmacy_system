import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sale, SaleDocument } from './schemas/sale.schema';
import { CreateSaleDto } from './dto/create-sale.dto';
import { Cashier, CashierDocument } from './schemas/cashier.schema';
import { CreateCashierDto } from './dto/create-cashier.dto';
import { Earning, EarningSchema } from './schemas/earning.schema';
import { Expense, ExpenseSchema } from './schemas/expense.schema';
import { CreateEarningDto } from './dto/create-earning.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';

@Injectable()
export class CashierService {
  constructor(
    @InjectModel(Sale.name) private saleModel: Model<SaleDocument>,
    @InjectModel(Cashier.name) private cashierModel: Model<CashierDocument>,
    @InjectModel(Earning.name) private earningModel: Model<Earning>,
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
  ) {}

  async createSale(createSaleDto: CreateSaleDto) {
    const sale = new this.saleModel({
      ...createSaleDto,
      date: new Date(), 
    });
    return sale.save();
  }
    async getSales() {
        return this.saleModel.find().exec();
    }

    async createCashier(createCashierDto:CreateCashierDto) {
        const cashier = new this.cashierModel(createCashierDto);
        return cashier.save();
    }

    async getCashiers() {
        return this.cashierModel.find().exec();
    }

  async createEarning(dto: CreateEarningDto) {
    const earning = new this.earningModel(dto);
    return earning.save();
  }

  async getEarnings(date?: Date) {
    if (date) {
      return this.earningModel.find({ date }).exec();
    }
    return this.earningModel.find().exec();
  }

  async createExpense(dto: CreateExpenseDto) {
    const expense = new this.expenseModel(dto);
    return expense.save();
  }

  async getExpenses(date?: Date) {
    if (date) {
      return this.expenseModel.find({ date }).exec();
    }
    return this.expenseModel.find().exec();
  }

  async getNetProfit(date: Date) {
    const earnings = await this.earningModel.find({ date }).exec();
    const expenses = await this.expenseModel.find({ date }).exec();
    const totalEarnings = earnings.reduce((sum, e) => sum + e.posAmount + e.cashAmount + e.momoAmount, 0);
    const totalExpenses = expenses.reduce((sum, ex) => sum + ex.amount, 0);
    return { date, totalEarnings, totalExpenses, netProfit: totalEarnings - totalExpenses };
  }
}
