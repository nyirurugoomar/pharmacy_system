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
exports.SaleSchema = exports.Sale = exports.SaleItem = exports.PaymentMethod = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["MOMO"] = "MOMO";
    PaymentMethod["CASH"] = "CASH";
    PaymentMethod["CARD"] = "POS";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
class SaleItem {
}
exports.SaleItem = SaleItem;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SaleItem.prototype, "medicationName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], SaleItem.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], SaleItem.prototype, "unitPrice", void 0);
let Sale = class Sale {
};
exports.Sale = Sale;
__decorate([
    (0, mongoose_1.Prop)({ type: [SaleItem], required: true }),
    __metadata("design:type", Array)
], Sale.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Sale.prototype, "totalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Sale.prototype, "cashierId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Sale.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: PaymentMethod, required: true }),
    __metadata("design:type", String)
], Sale.prototype, "paymentMethod", void 0);
exports.Sale = Sale = __decorate([
    (0, mongoose_1.Schema)()
], Sale);
exports.SaleSchema = mongoose_1.SchemaFactory.createForClass(Sale);
//# sourceMappingURL=sale.schema.js.map