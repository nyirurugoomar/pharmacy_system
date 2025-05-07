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
exports.StockKeeperService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const purchase_schema_1 = require("./schemas/purchase.schema");
let StockKeeperService = class StockKeeperService {
    constructor(purchaseModel) {
        this.purchaseModel = purchaseModel;
    }
    async createPurchase(createPurchaseDto) {
        const newPurchase = new this.purchaseModel(createPurchaseDto);
        const savedPurchase = await newPurchase.save();
        return { message: 'Purchase recorded successfully', data: savedPurchase };
    }
    async getAllPurchases() {
        const purchases = await this.purchaseModel.find().sort({ purchaseDate: -1 });
        return purchases;
    }
    async getPurchaseById(id) {
        const purchase = await this.purchaseModel.findById(id);
        return purchase;
    }
    async updatePurchase(id, updatePurchaseDto) {
        const updatedPurchase = await this.purchaseModel.findByIdAndUpdate(id, updatePurchaseDto, { new: true });
        return updatedPurchase;
    }
    async deletePurchase(id) {
        await this.purchaseModel.findByIdAndDelete(id);
        return { message: 'Purchase deleted successfully' };
    }
    async getTotalPurchases() {
        const result = await this.purchaseModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalAmount: { $sum: '$totalAmount' },
                    totalPurchases: { $sum: 1 },
                    totalQuantity: { $sum: '$quantity' }
                }
            }
        ]);
        return result[0] || { totalAmount: 0, totalPurchases: 0, totalQuantity: 0 };
    }
    async getOutstandingCredits() {
        const result = await this.purchaseModel.aggregate([
            {
                $match: {
                    status: 'pending'
                }
            },
            {
                $group: {
                    _id: null,
                    totalOutstanding: { $sum: '$totalAmount' },
                    numberOfOutstanding: { $sum: 1 }
                }
            }
        ]);
        return result[0] || { totalOutstanding: 0, numberOfOutstanding: 0 };
    }
    async getPurchaseSummary() {
        const [totalPurchases, outstandingCredits] = await Promise.all([
            this.getTotalPurchases(),
            this.getOutstandingCredits()
        ]);
        return {
            totalPurchases,
            outstandingCredits,
            summary: {
                totalAmount: totalPurchases.totalAmount,
                totalPurchases: totalPurchases.totalPurchases,
                totalQuantity: totalPurchases.totalQuantity,
                totalOutstanding: outstandingCredits.totalOutstanding,
                numberOfOutstanding: outstandingCredits.numberOfOutstanding
            }
        };
    }
};
exports.StockKeeperService = StockKeeperService;
exports.StockKeeperService = StockKeeperService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(purchase_schema_1.Purchase.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StockKeeperService);
//# sourceMappingURL=stock-keeper.service.js.map