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
exports.CreateSaleDto = exports.SaleItemDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const sale_schema_1 = require("../schemas/sale.schema");
const swagger_1 = require("@nestjs/swagger");
class SaleItemDto {
}
exports.SaleItemDto = SaleItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Medication Name'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SaleItemDto.prototype, "medicationName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Medication Quantity'
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaleItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Medication Unit Price'
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaleItemDto.prototype, "unitPrice", void 0);
class CreateSaleDto {
}
exports.CreateSaleDto = CreateSaleDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Medication Items'
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SaleItemDto),
    __metadata("design:type", Array)
], CreateSaleDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total Price'
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSaleDto.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cashier ID'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSaleDto.prototype, "cashierId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(sale_schema_1.PaymentMethod),
    __metadata("design:type", String)
], CreateSaleDto.prototype, "paymentMethod", void 0);
//# sourceMappingURL=create-sale.dto.js.map