import { Model } from 'mongoose';
import { Medicine, MedicineDocument } from './schemas/medecine.schema';
import { CreateMedicineDto } from './dto/create-medicine';
import { CreatePharmacistDto } from './dto/create-pharmacist';
import { InsuranceRecord } from './schemas/insurance-record.schema';
import { InsurancePayment } from './schemas/insurance-payment.schema';
import { CreateInsuranceRecordDto } from './dto/create-insurance-record.dto';
import { CreateInsurancePaymentDto } from './dto/create-insurance-payment.dto';
export declare class PharmacistService {
    private medicineModel;
    private insuranceRecordModel;
    private insurancePaymentModel;
    constructor(medicineModel: Model<MedicineDocument>, insuranceRecordModel: Model<InsuranceRecord>, insurancePaymentModel: Model<InsurancePayment>);
    createMedicine(createMedicineDto: CreateMedicineDto): Promise<import("mongoose").Document<unknown, {}, MedicineDocument> & Medicine & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getAllMedicines(): Promise<(import("mongoose").Document<unknown, {}, MedicineDocument> & Medicine & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    updateStock(medicineName: string, quantity: number): Promise<import("mongoose").Document<unknown, {}, MedicineDocument> & Medicine & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createPharmacist(createPharmacistDto: CreatePharmacistDto): Promise<import("mongoose").Document<unknown, {}, MedicineDocument> & Medicine & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getPharmacists(): Promise<(import("mongoose").Document<unknown, {}, MedicineDocument> & Medicine & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createInsuranceRecord(dto: CreateInsuranceRecordDto): Promise<import("mongoose").Document<unknown, {}, InsuranceRecord> & InsuranceRecord & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getInsuranceRecords(date?: Date): Promise<(import("mongoose").Document<unknown, {}, InsuranceRecord> & InsuranceRecord & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    createInsurancePayment(dto: CreateInsurancePaymentDto): Promise<import("mongoose").Document<unknown, {}, InsurancePayment> & InsurancePayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getInsurancePayments(date?: Date): Promise<(import("mongoose").Document<unknown, {}, InsurancePayment> & InsurancePayment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
