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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseSchema = exports.Purchase = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
let Purchase = class Purchase extends mongoose_2.Document {
};
exports.Purchase = Purchase;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Paracetamol 500mg', description: 'Name of the medicine' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Purchase.prototype, "medicineName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100, description: 'Quantity of medicine purchased' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Purchase.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0.5, description: 'Price per unit' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Purchase.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ABC Suppliers', description: 'Name of the supplier' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Purchase.prototype, "supplier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-03-20', description: 'Date of purchase' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Purchase.prototype, "purchaseDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50, description: 'Total amount of purchase' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Purchase.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pending', description: 'Status of the purchase' }),
    (0, mongoose_1.Prop)({ default: 'pending' }),
    __metadata("design:type", String)
], Purchase.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Regular monthly supply', description: 'Additional notes' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Purchase.prototype, "notes", void 0);
exports.Purchase = Purchase = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Purchase);
exports.PurchaseSchema = mongoose_1.SchemaFactory.createForClass(Purchase);
//# sourceMappingURL=purchase.schema.js.map