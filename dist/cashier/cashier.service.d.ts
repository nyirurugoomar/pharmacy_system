import { Model } from 'mongoose';
import { Sale, SaleDocument } from './schemas/sale.schema';
import { CreateSaleDto } from './dto/create-sale.dto';
import { Cashier, CashierDocument } from './schemas/cashier.schema';
import { CreateCashierDto } from './dto/create-cashier.dto';
import { Earning } from './schemas/earning.schema';
import { Expense } from './schemas/expense.schema';
import { CreateEarningDto } from './dto/create-earning.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
export declare class CashierService {
    private saleModel;
    private cashierModel;
    private earningModel;
    private expenseModel;
    constructor(saleModel: Model<SaleDocument>, cashierModel: Model<CashierDocument>, earningModel: Model<Earning>, expenseModel: Model<Expense>);
    createSale(createSaleDto: CreateSaleDto): Promise<import("mongoose").Document<unknown, {}, SaleDocument> & Sale & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getSales(): Promise<(import("mongoose").Document<unknown, {}, SaleDocument> & Sale & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createCashier(createCashierDto: CreateCashierDto): Promise<import("mongoose").Document<unknown, {}, CashierDocument> & Cashier & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getCashiers(): Promise<(import("mongoose").Document<unknown, {}, CashierDocument> & Cashier & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createEarning(dto: CreateEarningDto): Promise<import("mongoose").Document<unknown, {}, Earning> & Earning & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getEarnings(date?: Date): Promise<(import("mongoose").Document<unknown, {}, Earning> & Earning & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createExpense(dto: CreateExpenseDto): Promise<import("mongoose").Document<unknown, {}, Expense> & Expense & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getExpenses(date?: Date): Promise<(import("mongoose").Document<unknown, {}, Expense> & Expense & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getNetProfit(date: Date): Promise<{
        date: Date;
        totalEarnings: number;
        totalExpenses: number;
        netProfit: number;
    }>;
}
