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
exports.CreateEarningDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateEarningDto {
}
exports.CreateEarningDto = CreateEarningDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100, description: 'Amount received via POS' }),
    __metadata("design:type", Number)
], CreateEarningDto.prototype, "posAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200, description: 'Amount received in cash' }),
    __metadata("design:type", Number)
], CreateEarningDto.prototype, "cashAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 150, description: 'Amount received via MOMO' }),
    __metadata("design:type", Number)
], CreateEarningDto.prototype, "momoAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-04-29', description: 'Date of earning (YYYY-MM-DD)' }),
    __metadata("design:type", Date)
], CreateEarningDto.prototype, "date", void 0);
//# sourceMappingURL=create-earning.dto.js.map