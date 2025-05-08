"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashierService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const sale_schema_1 = require("./schemas/sale.schema");
const cashier_schema_1 = require("./schemas/cashier.schema");
const earning_schema_1 = require("./schemas/earning.schema");
const expense_schema_1 = require("./schemas/expense.schema");
const ExcelJS = require("exceljs");
const PDFDocument = require("pdfkit");
let CashierService = class CashierService {
    constructor(saleModel, cashierModel, earningModel, expenseModel) {
        this.saleModel = saleModel;
        this.cashierModel = cashierModel;
        this.earningModel = earningModel;
        this.expenseModel = expenseModel;
    }
    async createSale(createSaleDto) {
        try {
            const sale = new this.saleModel({
                ...createSaleDto,
                date: new Date(),
            });
            return await sale.save();
        }
        catch (error) {
            throw new Error(`Failed to create sale: ${error.message}`);
        }
    }
    async getSales() {
        try {
            return await this.saleModel.find().sort({ date: -1 }).exec();
        }
        catch (error) {
            throw new Error(`Failed to fetch sales: ${error.message}`);
        }
    }
    async createCashier(createCashierDto) {
        try {
            const cashier = new this.cashierModel(createCashierDto);
            return await cashier.save();
        }
        catch (error) {
            throw new Error(`Failed to create cashier: ${error.message}`);
        }
    }
    async getCashiers() {
        try {
            return await this.cashierModel.find().exec();
        }
        catch (error) {
            throw new Error(`Failed to fetch cashiers: ${error.message}`);
        }
    }
    async createEarning(dto) {
        try {
            if (dto.posAmount < 0 || dto.cashAmount < 0 || dto.momoAmount < 0) {
                throw new Error('Amounts cannot be negative');
            }
            const earning = new this.earningModel({
                ...dto,
                date: new Date(),
            });
            return await earning.save();
        }
        catch (error) {
            throw new Error(`Failed to create earning: ${error.message}`);
        }
    }
    async getEarnings(date) {
        try {
            const query = date ? { date } : {};
            return await this.earningModel.find(query).sort({ date: -1 }).exec();
        }
        catch (error) {
            throw new Error(`Failed to fetch earnings: ${error.message}`);
        }
    }
    async createExpense(dto) {
        try {
            if (dto.amount < 0) {
                throw new Error('Amount cannot be negative');
            }
            const expense = new this.expenseModel({
                ...dto,
                date: new Date(),
            });
            return await expense.save();
        }
        catch (error) {
            throw new Error(`Failed to create expense: ${error.message}`);
        }
    }
    async getExpenses(date) {
        try {
            const query = date ? { date } : {};
            return await this.expenseModel.find(query).sort({ date: -1 }).exec();
        }
        catch (error) {
            throw new Error(`Failed to fetch expenses: ${error.message}`);
        }
    }
    async getNetProfit(date) {
        try {
            let query = {};
            if (date) {
                const parsedDate = new Date(date);
                if (isNaN(parsedDate.getTime())) {
                    throw new Error('Invalid date provided');
                }
                const startOfDay = new Date(parsedDate);
                startOfDay.setHours(0, 0, 0, 0);
                const endOfDay = new Date(parsedDate);
                endOfDay.setHours(23, 59, 59, 999);
                query = {
                    date: {
                        $gte: startOfDay,
                        $lte: endOfDay
                    }
                };
            }
            const [earnings, expenses] = await Promise.all([
                this.earningModel.find(query).exec(),
                this.expenseModel.find(query).exec()
            ]);
            const totalEarnings = earnings.reduce((sum, e) => {
                return sum + (Number(e.posAmount) || 0) + (Number(e.cashAmount) || 0) + (Number(e.momoAmount) || 0);
            }, 0);
            const totalExpenses = expenses.reduce((sum, ex) => sum + (Number(ex.amount) || 0), 0);
            const posTotal = earnings.reduce((sum, e) => sum + (Number(e.posAmount) || 0), 0);
            const cashTotal = earnings.reduce((sum, e) => sum + (Number(e.cashAmount) || 0), 0);
            const momoTotal = earnings.reduce((sum, e) => sum + (Number(e.momoAmount) || 0), 0);
            return {
                earnings: totalEarnings,
                expenses: totalExpenses,
                netProfit: totalEarnings - totalExpenses,
                breakdown: {
                    posTotal,
                    cashTotal,
                    momoTotal,
                    totalTransactions: earnings.length
                }
            };
        }
        catch (error) {
            throw new Error(`Failed to calculate net profit: ${error.message}`);
        }
    }
    async getDailyReport(date) {
        try {
            const parsedDate = new Date(date);
            if (isNaN(parsedDate.getTime())) {
                throw new Error('Invalid date provided');
            }
            const startOfDay = new Date(parsedDate);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(parsedDate);
            endOfDay.setHours(23, 59, 59, 999);
            const [earnings, expenses] = await Promise.all([
                this.earningModel.find({
                    date: {
                        $gte: startOfDay,
                        $lte: endOfDay
                    }
                }).exec(),
                this.expenseModel.find({
                    date: {
                        $gte: startOfDay,
                        $lte: endOfDay
                    }
                }).exec()
            ]);
            const totalEarnings = earnings.reduce((sum, e) => {
                return sum + (Number(e.posAmount) || 0) + (Number(e.cashAmount) || 0) + (Number(e.momoAmount) || 0);
            }, 0);
            const totalExpenses = expenses.reduce((sum, ex) => sum + (Number(ex.amount) || 0), 0);
            const posTotal = earnings.reduce((sum, e) => sum + (Number(e.posAmount) || 0), 0);
            const cashTotal = earnings.reduce((sum, e) => sum + (Number(e.cashAmount) || 0), 0);
            const momoTotal = earnings.reduce((sum, e) => sum + (Number(e.momoAmount) || 0), 0);
            return {
                date: parsedDate,
                earnings: totalEarnings,
                expenses: totalExpenses,
                netProfit: totalEarnings - totalExpenses,
                breakdown: {
                    posTotal,
                    cashTotal,
                    momoTotal,
                    totalTransactions: earnings.length
                }
            };
        }
        catch (error) {
            throw new Error(`Failed to generate daily report: ${error.message}`);
        }
    }
    async getInsuranceStatus(startDate, endDate) {
        try {
            const query = {};
            if (startDate && endDate) {
                query.date = {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                };
            }
            const sales = await this.saleModel.find(query).exec();
            const insuranceStats = sales.reduce((acc, sale) => {
                if (sale.insurance) {
                    acc.totalInsuranceAmount += Number(sale.insurance.amount) || 0;
                    acc.totalInsuranceClaims += 1;
                    if (sale.insurance.status === 'pending') {
                        acc.pendingAmount += Number(sale.insurance.amount) || 0;
                        acc.pendingClaims += 1;
                    }
                    else if (sale.insurance.status === 'paid') {
                        acc.paidAmount += Number(sale.insurance.amount) || 0;
                        acc.paidClaims += 1;
                    }
                }
                return acc;
            }, {
                totalInsuranceAmount: 0,
                totalInsuranceClaims: 0,
                pendingAmount: 0,
                pendingClaims: 0,
                paidAmount: 0,
                paidClaims: 0
            });
            return {
                ...insuranceStats,
                paymentRate: insuranceStats.totalInsuranceClaims > 0
                    ? (insuranceStats.paidClaims / insuranceStats.totalInsuranceClaims) * 100
                    : 0
            };
        }
        catch (error) {
            throw new Error(`Failed to get insurance status: ${error.message}`);
        }
    }
    async getPurchaseExpenses(startDate, endDate) {
        try {
            const query = { type: 'purchase' };
            if (startDate && endDate) {
                query.date = {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                };
            }
            const expenses = await this.expenseModel.find(query).exec();
            const summary = expenses.reduce((acc, expense) => {
                acc.totalAmount += Number(expense.amount) || 0;
                acc.totalExpenses += 1;
                if (expense.status === 'pending') {
                    acc.pendingAmount += Number(expense.amount) || 0;
                    acc.pendingExpenses += 1;
                }
                else if (expense.status === 'paid') {
                    acc.paidAmount += Number(expense.amount) || 0;
                    acc.paidExpenses += 1;
                }
                return acc;
            }, {
                totalAmount: 0,
                totalExpenses: 0,
                pendingAmount: 0,
                pendingExpenses: 0,
                paidAmount: 0,
                paidExpenses: 0
            });
            return {
                ...summary,
                paymentRate: summary.totalExpenses > 0
                    ? (summary.paidExpenses / summary.totalExpenses) * 100
                    : 0
            };
        }
        catch (error) {
            throw new Error(`Failed to get purchase expenses: ${error.message}`);
        }
    }
    async exportToExcel(startDate, endDate) {
        try {
            const workbook = new ExcelJS.Workbook();
            const salesSheet = workbook.addWorksheet('Sales');
            salesSheet.columns = [
                { header: 'Date', key: 'date' },
                { header: 'Amount', key: 'amount' },
                { header: 'Payment Method', key: 'paymentMethod' },
                { header: 'Insurance', key: 'insurance' }
            ];
            const sales = await this.saleModel.find({
                date: {
                    $gte: startDate ? new Date(startDate) : new Date(0),
                    $lte: endDate ? new Date(endDate) : new Date()
                }
            }).exec();
            sales.forEach(sale => {
                salesSheet.addRow({
                    date: sale.date,
                    amount: sale.amount,
                    paymentMethod: sale.paymentMethod,
                    insurance: sale.insurance ? 'Yes' : 'No'
                });
            });
            const expensesSheet = workbook.addWorksheet('Expenses');
            expensesSheet.columns = [
                { header: 'Date', key: 'date' },
                { header: 'Amount', key: 'amount' },
                { header: 'Description', key: 'description' },
                { header: 'Status', key: 'status' }
            ];
            const expenses = await this.expenseModel.find({
                date: {
                    $gte: startDate ? new Date(startDate) : new Date(0),
                    $lte: endDate ? new Date(endDate) : new Date()
                }
            }).exec();
            expenses.forEach(expense => {
                expensesSheet.addRow({
                    date: expense.date,
                    amount: expense.amount,
                    description: expense.description,
                    status: expense.status
                });
            });
            return workbook;
        }
        catch (error) {
            throw new Error(`Failed to export to Excel: ${error.message}`);
        }
    }
    async exportToPDF(startDate, endDate) {
        try {
            const doc = new PDFDocument();
            doc.fontSize(20).text('Pharmacy Management System Report', { align: 'center' });
            doc.moveDown();
            doc.fontSize(12).text(`Report Period: ${startDate ? startDate.toLocaleDateString() : 'All Time'} to ${endDate ? endDate.toLocaleDateString() : 'Present'}`);
            doc.moveDown();
            const [netProfit, insuranceStatus, purchaseExpenses] = await Promise.all([
                this.getNetProfit(),
                this.getInsuranceStatus(startDate, endDate),
                this.getPurchaseExpenses(startDate, endDate)
            ]);
            doc.fontSize(16).text('Financial Summary');
            doc.fontSize(12)
                .text(`Total Earnings: $${netProfit.earnings}`)
                .text(`Total Expenses: $${netProfit.expenses}`)
                .text(`Net Profit: $${netProfit.netProfit}`);
            doc.moveDown();
            doc.fontSize(16).text('Insurance Summary');
            doc.fontSize(12)
                .text(`Total Insurance Claims: ${insuranceStatus.totalInsuranceClaims}`)
                .text(`Pending Claims: ${insuranceStatus.pendingClaims}`)
                .text(`Paid Claims: ${insuranceStatus.paidClaims}`)
                .text(`Payment Rate: ${insuranceStatus.paymentRate.toFixed(2)}%`);
            doc.moveDown();
            doc.fontSize(16).text('Purchase Expenses Summary');
            doc.fontSize(12)
                .text(`Total Expenses: ${purchaseExpenses.totalExpenses}`)
                .text(`Pending Expenses: ${purchaseExpenses.pendingExpenses}`)
                .text(`Paid Expenses: ${purchaseExpenses.paidExpenses}`)
                .text(`Payment Rate: ${purchaseExpenses.paymentRate.toFixed(2)}%`);
            return doc;
        }
        catch (error) {
            throw new Error(`Failed to export to PDF: ${error.message}`);
        }
    }
};
exports.CashierService = CashierService;
exports.CashierService = CashierService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(sale_schema_1.Sale.name)),
    __param(1, (0, mongoose_1.InjectModel)(cashier_schema_1.Cashier.name)),
    __param(2, (0, mongoose_1.InjectModel)(earning_schema_1.Earning.name)),
    __param(3, (0, mongoose_1.InjectModel)(expense_schema_1.Expense.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CashierService);
//# sourceMappingURL=cashier.service.js.map