import { PharmacistService } from './pharmacist.service';
import { CreateMedicineDto } from './dto/create-medicine';
import { CreatePharmacistDto } from './dto/create-pharmacist';
import { CreateInsuranceRecordDto } from './dto/create-insurance-record.dto';
import { CreateInsurancePaymentDto } from './dto/create-insurance-payment.dto';
export declare class PharmacistController {
    private readonly pharmacistService;
    constructor(pharmacistService: PharmacistService);
    createMedicine(createMedicineDto: CreateMedicineDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/medecine.schema").MedicineDocument> & import("./schemas/medecine.schema").Medicine & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getAllMedicines(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/medecine.schema").MedicineDocument> & import("./schemas/medecine.schema").Medicine & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    updateStock(medicineName: string, quantity: number): Promise<import("mongoose").Document<unknown, {}, import("./schemas/medecine.schema").MedicineDocument> & import("./schemas/medecine.schema").Medicine & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createPharmacist(createPharmacistDto: CreatePharmacistDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/medecine.schema").MedicineDocument> & import("./schemas/medecine.schema").Medicine & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createInsuranceRecord(dto: CreateInsuranceRecordDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/insurance-record.schema").InsuranceRecord> & import("./schemas/insurance-record.schema").InsuranceRecord & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getInsuranceRecords(date?: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/insurance-record.schema").InsuranceRecord> & import("./schemas/insurance-record.schema").InsuranceRecord & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createInsurancePayment(dto: CreateInsurancePaymentDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/insurance-payment.schema").InsurancePayment> & import("./schemas/insurance-payment.schema").InsurancePayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getInsurancePayments(date?: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/insurance-payment.schema").InsurancePayment> & import("./schemas/insurance-payment.schema").InsurancePayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
