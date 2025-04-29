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
let CashierService = class CashierService {
    constructor(saleModel, cashierModel, earningModel, expenseModel) {
        this.saleModel = saleModel;
        this.cashierModel = cashierModel;
        this.earningModel = earningModel;
        this.expenseModel = expenseModel;
    }
    async createSale(createSaleDto) {
        const sale = new this.saleModel({
            ...createSaleDto,
            date: new Date(),
        });
        return sale.save();
    }
    async getSales() {
        return this.saleModel.find().exec();
    }
    async createCashier(createCashierDto) {
        const cashier = new this.cashierModel(createCashierDto);
        return cashier.save();
    }
    async getCashiers() {
        return this.cashierModel.find().exec();
    }
    async createEarning(dto) {
        const earning = new this.earningModel(dto);
        return earning.save();
    }
    async getEarnings(date) {
        if (date) {
            return this.earningModel.find({ date }).exec();
        }
        return this.earningModel.find().exec();
    }
    async createExpense(dto) {
        const expense = new this.expenseModel(dto);
        return expense.save();
    }
    async getExpenses(date) {
        if (date) {
            return this.expenseModel.find({ date }).exec();
        }
        return this.expenseModel.find().exec();
    }
    async getNetProfit(date) {
        const earnings = await this.earningModel.find({ date }).exec();
        const expenses = await this.expenseModel.find({ date }).exec();
        const totalEarnings = earnings.reduce((sum, e) => sum + e.posAmount + e.cashAmount + e.momoAmount, 0);
        const totalExpenses = expenses.reduce((sum, ex) => sum + ex.amount, 0);
        return { date, totalEarnings, totalExpenses, netProfit: totalEarnings - totalExpenses };
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