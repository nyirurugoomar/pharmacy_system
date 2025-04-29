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
exports.CreateInsurancePaymentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateInsurancePaymentDto {
}
exports.CreateInsurancePaymentDto = CreateInsurancePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'RSB', description: 'Insurance company name' }),
    __metadata("design:type", String)
], CreateInsurancePaymentDto.prototype, "insuranceCompany", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500, description: 'Amount to be paid' }),
    __metadata("design:type", Number)
], CreateInsurancePaymentDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Paid', description: 'Payment status (Paid, Not Paid, Pending)' }),
    __metadata("design:type", String)
], CreateInsurancePaymentDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-04-29', description: 'Date of payment (YYYY-MM-DD)' }),
    __metadata("design:type", Date)
], CreateInsurancePaymentDto.prototype, "date", void 0);
//# sourceMappingURL=create-insurance-payment.dto.js.map