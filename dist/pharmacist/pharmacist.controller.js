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
exports.PharmacistController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pharmacist_service_1 = require("./pharmacist.service");
const create_medicine_1 = require("./dto/create-medicine");
const create_pharmacist_1 = require("./dto/create-pharmacist");
const create_insurance_record_dto_1 = require("./dto/create-insurance-record.dto");
const create_insurance_payment_dto_1 = require("./dto/create-insurance-payment.dto");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("../auth/roles.decorator");
let PharmacistController = class PharmacistController {
    constructor(pharmacistService) {
        this.pharmacistService = pharmacistService;
    }
    async createMedicine(createMedicineDto) {
        return this.pharmacistService.createMedicine(createMedicineDto);
    }
    async getAllMedicines() {
        return this.pharmacistService.getAllMedicines();
    }
    async updateStock(medicineName, quantity) {
        return this.pharmacistService.updateStock(medicineName, quantity);
    }
    createPharmacist(createPharmacistDto) {
        return this.pharmacistService.createPharmacist(createPharmacistDto);
    }
    createInsuranceRecord(dto) {
        return this.pharmacistService.createInsuranceRecord(dto);
    }
    getInsuranceRecords(date) {
        return this.pharmacistService.getInsuranceRecords(date ? new Date(date) : undefined);
    }
    createInsurancePayment(dto) {
        return this.pharmacistService.createInsurancePayment(dto);
    }
    getInsurancePayments(date) {
        return this.pharmacistService.getInsurancePayments(date ? new Date(date) : undefined);
    }
};
exports.PharmacistController = PharmacistController;
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'pharmacist'),
    (0, common_1.Post)('create-medicine'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medicine_1.CreateMedicineDto]),
    __metadata("design:returntype", Promise)
], PharmacistController.prototype, "createMedicine", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'pharmacist'),
    (0, common_1.Get)('all-medicine'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PharmacistController.prototype, "getAllMedicines", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'pharmacist'),
    (0, common_1.Put)('update-stock/:medicineName'),
    __param(0, (0, common_1.Param)('medicineName')),
    __param(1, (0, common_1.Body)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], PharmacistController.prototype, "updateStock", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)('pharmacist-register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pharmacist_1.CreatePharmacistDto]),
    __metadata("design:returntype", void 0)
], PharmacistController.prototype, "createPharmacist", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'pharmacist'),
    (0, common_1.Post)('insurance-record'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_insurance_record_dto_1.CreateInsuranceRecordDto]),
    __metadata("design:returntype", void 0)
], PharmacistController.prototype, "createInsuranceRecord", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'pharmacist'),
    (0, common_1.Get)('insurance-records'),
    __param(0, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PharmacistController.prototype, "getInsuranceRecords", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'pharmacist'),
    (0, common_1.Post)('insurance-payment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_insurance_payment_dto_1.CreateInsurancePaymentDto]),
    __metadata("design:returntype", void 0)
], PharmacistController.prototype, "createInsurancePayment", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'pharmacist'),
    (0, common_1.Get)('insurance-payments'),
    __param(0, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PharmacistController.prototype, "getInsurancePayments", null);
exports.PharmacistController = PharmacistController = __decorate([
    (0, swagger_1.ApiTags)('Pharmacist'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Controller)('pharmacist'),
    __metadata("design:paramtypes", [pharmacist_service_1.PharmacistService])
], PharmacistController);
//# sourceMappingURL=pharmacist.controller.js.map