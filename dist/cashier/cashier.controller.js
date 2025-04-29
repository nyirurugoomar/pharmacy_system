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
exports.CashierController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cashier_service_1 = require("./cashier.service");
const create_sale_dto_1 = require("./dto/create-sale.dto");
const create_cashier_dto_1 = require("./dto/create-cashier.dto");
const create_earning_dto_1 = require("./dto/create-earning.dto");
const create_expense_dto_1 = require("./dto/create-expense.dto");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("../auth/roles.decorator");
let CashierController = class CashierController {
    constructor(cashierService) {
        this.cashierService = cashierService;
    }
    createSale(createSaleDto) {
        return this.cashierService.createSale(createSaleDto);
    }
    getSales() {
        return this.cashierService.getSales();
    }
    createCashier(createCashierDto) {
        return this.cashierService.createCashier(createCashierDto);
    }
    createEarning(dto) {
        return this.cashierService.createEarning(dto);
    }
    getEarnings(date) {
        return this.cashierService.getEarnings(date ? new Date(date) : undefined);
    }
    createExpense(dto) {
        return this.cashierService.createExpense(dto);
    }
    getExpenses(date) {
        return this.cashierService.getExpenses(date ? new Date(date) : undefined);
    }
    getNetProfit(date) {
        return this.cashierService.getNetProfit(new Date(date));
    }
};
exports.CashierController = CashierController;
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'cashier'),
    (0, common_1.Post)('create-sale'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sale_dto_1.CreateSaleDto]),
    __metadata("design:returntype", void 0)
], CashierController.prototype, "createSale", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'cashier'),
    (0, common_1.Get)('get-sales'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashierController.prototype, "getSales", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)('cashier-register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cashier_dto_1.CreateCashierDto]),
    __metadata("design:returntype", void 0)
], CashierController.prototype, "createCashier", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'cashier'),
    (0, common_1.Post)('earning'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_earning_dto_1.CreateEarningDto]),
    __metadata("design:returntype", void 0)
], CashierController.prototype, "createEarning", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'cashier'),
    (0, common_1.Get)('earnings'),
    __param(0, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CashierController.prototype, "getEarnings", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'cashier'),
    (0, common_1.Post)('expense'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_expense_dto_1.CreateExpenseDto]),
    __metadata("design:returntype", void 0)
], CashierController.prototype, "createExpense", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'cashier'),
    (0, common_1.Get)('expenses'),
    __param(0, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CashierController.prototype, "getExpenses", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'cashier'),
    (0, common_1.Get)('net-profit'),
    __param(0, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CashierController.prototype, "getNetProfit", null);
exports.CashierController = CashierController = __decorate([
    (0, swagger_1.ApiTags)('Cashier'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('cashier'),
    __metadata("design:paramtypes", [cashier_service_1.CashierService])
], CashierController);
//# sourceMappingURL=cashier.controller.js.map