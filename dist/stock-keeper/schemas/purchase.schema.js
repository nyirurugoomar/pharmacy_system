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
    (0, swagger_1.ApiProperty)({ example: 'Depot A', description: 'Name of the depot' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Purchase.prototype, "depotName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000, description: 'Amount paid for the purchase' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Purchase.prototype, "amountPaid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Paid', description: 'Payment status (Paid or Credit)' }),
    (0, mongoose_1.Prop)({ required: true, enum: ['Paid', 'Credit'] }),
    __metadata("design:type", String)
], Purchase.prototype, "paymentStatus", void 0);
exports.Purchase = Purchase = __decorate([
    (0, mongoose_1.Schema)()
], Purchase);
exports.PurchaseSchema = mongoose_1.SchemaFactory.createForClass(Purchase);
//# sourceMappingURL=purchase.schema.js.map