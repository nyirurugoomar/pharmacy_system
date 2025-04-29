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
exports.PharmacistService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const medecine_schema_1 = require("./schemas/medecine.schema");
const insurance_record_schema_1 = require("./schemas/insurance-record.schema");
const insurance_payment_schema_1 = require("./schemas/insurance-payment.schema");
let PharmacistService = class PharmacistService {
    constructor(medicineModel, insuranceRecordModel, insurancePaymentModel) {
        this.medicineModel = medicineModel;
        this.insuranceRecordModel = insuranceRecordModel;
        this.insurancePaymentModel = insurancePaymentModel;
    }
    async createMedicine(createMedicineDto) {
        const newMedicine = new this.medicineModel(createMedicineDto);
        return newMedicine.save();
    }
    async getAllMedicines() {
        return this.medicineModel.find().exec();
    }
    async updateStock(medicineName, quantity) {
        const medicine = await this.medicineModel.findOne({ name: medicineName });
        if (!medicine) {
            throw new Error('Medicine not found');
        }
        medicine.stock += quantity;
        return medicine.save();
    }
    async createPharmacist(createPharmacistDto) {
        const pharmacist = new this.medicineModel(createPharmacistDto);
        return pharmacist.save();
    }
    async getPharmacists() {
        return this.medicineModel.find().exec();
    }
    async createInsuranceRecord(dto) {
        const record = new this.insuranceRecordModel(dto);
        return record.save();
    }
    async getInsuranceRecords(date) {
        if (date) {
            return this.insuranceRecordModel.find({ date }).exec();
        }
        return this.insuranceRecordModel.find().exec();
    }
    async createInsurancePayment(dto) {
        const payment = new this.insurancePaymentModel(dto);
        return payment.save();
    }
    async getInsurancePayments(date) {
        if (date) {
            return this.insurancePaymentModel.find({ date }).exec();
        }
        return this.insurancePaymentModel.find().exec();
    }
};
exports.PharmacistService = PharmacistService;
exports.PharmacistService = PharmacistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(medecine_schema_1.Medicine.name)),
    __param(1, (0, mongoose_1.InjectModel)(insurance_record_schema_1.InsuranceRecord.name)),
    __param(2, (0, mongoose_1.InjectModel)(insurance_payment_schema_1.InsurancePayment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], PharmacistService);
//# sourceMappingURL=pharmacist.service.js.map