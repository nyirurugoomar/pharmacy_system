"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashierModule = void 0;
const common_1 = require("@nestjs/common");
const cashier_controller_1 = require("./cashier.controller");
const cashier_service_1 = require("./cashier.service");
const sale_schema_1 = require("./schemas/sale.schema");
const mongoose_1 = require("@nestjs/mongoose");
const cashier_schema_1 = require("./schemas/cashier.schema");
const earning_schema_1 = require("./schemas/earning.schema");
const expense_schema_1 = require("./schemas/expense.schema");
let CashierModule = class CashierModule {
};
exports.CashierModule = CashierModule;
exports.CashierModule = CashierModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Sale', schema: sale_schema_1.SaleSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Cashier', schema: cashier_schema_1.CashierSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Earning', schema: earning_schema_1.EarningSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Expense', schema: expense_schema_1.ExpenseSchema }]),
        ],
        controllers: [cashier_controller_1.CashierController],
        providers: [cashier_service_1.CashierService]
    })
], CashierModule);
3973218747;
//# sourceMappingURL=cashier.module.js.map