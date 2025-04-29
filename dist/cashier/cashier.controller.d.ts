import { CashierService } from './cashier.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { CreateCashierDto } from './dto/create-cashier.dto';
import { CreateEarningDto } from './dto/create-earning.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
export declare class CashierController {
    private readonly cashierService;
    constructor(cashierService: CashierService);
    createSale(createSaleDto: CreateSaleDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/sale.schema").SaleDocument> & import("./schemas/sale.schema").Sale & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getSales(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/sale.schema").SaleDocument> & import("./schemas/sale.schema").Sale & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createCashier(createCashierDto: CreateCashierDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/cashier.schema").CashierDocument> & import("./schemas/cashier.schema").Cashier & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createEarning(dto: CreateEarningDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/earning.schema").Earning> & import("./schemas/earning.schema").Earning & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getEarnings(date?: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/earning.schema").Earning> & import("./schemas/earning.schema").Earning & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createExpense(dto: CreateExpenseDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/expense.schema").Expense> & import("./schemas/expense.schema").Expense & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getExpenses(date?: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/expense.schema").Expense> & import("./schemas/expense.schema").Expense & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getNetProfit(date: string): Promise<{
        date: Date;
        totalEarnings: number;
        totalExpenses: number;
        netProfit: number;
    }>;
}
