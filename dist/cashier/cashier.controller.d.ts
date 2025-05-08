import { CashierService } from './cashier.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { CreateCashierDto } from './dto/create-cashier.dto';
import { CreateEarningDto } from './dto/create-earning.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { Response } from 'express';
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
        earnings: number;
        expenses: number;
        netProfit: number;
        breakdown: {
            posTotal: number;
            cashTotal: number;
            momoTotal: number;
            totalTransactions: number;
        };
    }>;
    getInsuranceStatus(startDate?: Date, endDate?: Date): Promise<{
        paymentRate: number;
        totalInsuranceAmount: number;
        totalInsuranceClaims: number;
        pendingAmount: number;
        pendingClaims: number;
        paidAmount: number;
        paidClaims: number;
    }>;
    getPurchaseExpenses(startDate?: Date, endDate?: Date): Promise<{
        paymentRate: number;
        totalAmount: number;
        totalExpenses: number;
        pendingAmount: number;
        pendingExpenses: number;
        paidAmount: number;
        paidExpenses: number;
    }>;
    exportToExcel(res: Response, startDate?: Date, endDate?: Date): Promise<void>;
    exportToPDF(res: Response, startDate?: Date, endDate?: Date): Promise<void>;
}
