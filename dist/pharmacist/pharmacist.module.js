"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PharmacistModule = void 0;
const common_1 = require("@nestjs/common");
const pharmacist_service_1 = require("./pharmacist.service");
const pharmacist_controller_1 = require("./pharmacist.controller");
const mongoose_1 = require("@nestjs/mongoose");
const medecine_schema_1 = require("./schemas/medecine.schema");
const insurance_record_schema_1 = require("./schemas/insurance-record.schema");
const insurance_payment_schema_1 = require("./schemas/insurance-payment.schema");
let PharmacistModule = class PharmacistModule {
};
exports.PharmacistModule = PharmacistModule;
exports.PharmacistModule = PharmacistModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: medecine_schema_1.Medicine.name, schema: medecine_schema_1.MedicineSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: insurance_record_schema_1.InsuranceRecord.name, schema: insurance_record_schema_1.InsuranceRecordSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: insurance_payment_schema_1.InsurancePayment.name, schema: insurance_payment_schema_1.InsurancePaymentSchema }]),
        ],
        providers: [pharmacist_service_1.PharmacistService],
        controllers: [pharmacist_controller_1.PharmacistController]
    })
], PharmacistModule);
//# sourceMappingURL=pharmacist.module.js.map