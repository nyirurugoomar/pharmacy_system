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
exports.StockKeeperController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const stock_keeper_service_1 = require("./stock-keeper.service");
const create_purchase_dto_1 = require("./dto/create-purchase.dto");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("../auth/roles.decorator");
let StockKeeperController = class StockKeeperController {
    constructor(stockKeeperService) {
        this.stockKeeperService = stockKeeperService;
    }
    createPurchase(createPurchaseDto) {
        return this.stockKeeperService.createPurchase(createPurchaseDto);
    }
    getAllPurchases() {
        return this.stockKeeperService.getAllPurchases();
    }
    getTotalPurchases() {
        return this.stockKeeperService.getTotalPurchases();
    }
    getOutstandingCredits() {
        return this.stockKeeperService.getOutstandingCredits();
    }
    getPurchaseSummary() {
        return this.stockKeeperService.getPurchaseSummary();
    }
};
exports.StockKeeperController = StockKeeperController;
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'stock-keeper'),
    (0, common_1.Post)('purchase'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new purchase' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_purchase_dto_1.CreatePurchaseDto]),
    __metadata("design:returntype", void 0)
], StockKeeperController.prototype, "createPurchase", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'stock-keeper'),
    (0, common_1.Get)('purchases'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all purchases' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StockKeeperController.prototype, "getAllPurchases", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'stock-keeper'),
    (0, common_1.Get)('total-purchases'),
    (0, swagger_1.ApiOperation)({ summary: 'Get total purchases summary' }),
    (0, swagger_1.ApiResponse)({ description: 'Returns total amount, number of purchases, and total quantity' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StockKeeperController.prototype, "getTotalPurchases", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'stock-keeper'),
    (0, common_1.Get)('outstanding-credits'),
    (0, swagger_1.ApiOperation)({ summary: 'Get outstanding credits summary' }),
    (0, swagger_1.ApiResponse)({ description: 'Returns total outstanding amount and number of pending purchases' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StockKeeperController.prototype, "getOutstandingCredits", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'stock-keeper'),
    (0, common_1.Get)('summary'),
    (0, swagger_1.ApiOperation)({ summary: 'Get complete purchase summary' }),
    (0, swagger_1.ApiResponse)({ description: 'Returns combined summary of total purchases and outstanding credits' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StockKeeperController.prototype, "getPurchaseSummary", null);
exports.StockKeeperController = StockKeeperController = __decorate([
    (0, swagger_1.ApiTags)('Stock Keeper'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('stock-keeper'),
    __metadata("design:paramtypes", [stock_keeper_service_1.StockKeeperService])
], StockKeeperController);
//# sourceMappingURL=stock-keeper.controller.js.map