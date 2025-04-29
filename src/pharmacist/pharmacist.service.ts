import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Medicine, MedicineDocument } from './schemas/medecine.schema';
import { CreateMedicineDto } from './dto/create-medicine';
import { CreatePharmacistDto } from './dto/create-pharmacist';
import { InsuranceRecord, InsuranceRecordSchema } from './schemas/insurance-record.schema';
import { InsurancePayment, InsurancePaymentSchema } from './schemas/insurance-payment.schema';
import { CreateInsuranceRecordDto } from './dto/create-insurance-record.dto';
import { CreateInsurancePaymentDto } from './dto/create-insurance-payment.dto';

@Injectable()
export class PharmacistService {
  constructor(
    @InjectModel(Medicine.name) private medicineModel: Model<MedicineDocument>,
    @InjectModel(InsuranceRecord.name) private insuranceRecordModel: Model<InsuranceRecord>,
    @InjectModel(InsurancePayment.name) private insurancePaymentModel: Model<InsurancePayment>,
  ) {}

  // Create a new medicine
  async createMedicine(createMedicineDto: CreateMedicineDto) {
    const newMedicine = new this.medicineModel(createMedicineDto);
    return newMedicine.save();
  }

  // Get all medicines
  async getAllMedicines() {
    return this.medicineModel.find().exec();
  }

  // Update stock of a medicine
  async updateStock(medicineName: string, quantity: number) {
    const medicine = await this.medicineModel.findOne({ name: medicineName });

    if (!medicine) {
      throw new Error('Medicine not found');
    }

    // Update the stock
    medicine.stock += quantity;

    return medicine.save();
  }

  // Create a pharmacist
  async createPharmacist(createPharmacistDto: CreatePharmacistDto) {
    const pharmacist = new this.medicineModel(createPharmacistDto);
    return pharmacist.save();
  }
  async getPharmacists() {
    return this.medicineModel.find().exec();
  }

  async createInsuranceRecord(dto: CreateInsuranceRecordDto) {
    const record = new this.insuranceRecordModel(dto);
    return record.save();
  }

  async getInsuranceRecords(date?: Date) {
    if (date) {
      return this.insuranceRecordModel.find({ date }).exec();
    }
    return this.insuranceRecordModel.find().exec();
  }

  async createInsurancePayment(dto: CreateInsurancePaymentDto) {
    const payment = new this.insurancePaymentModel(dto);
    return payment.save();
  }

  async getInsurancePayments(date?: Date) {
    if (date) {
      return this.insurancePaymentModel.find({ date }).exec();
    }
    return this.insurancePaymentModel.find().exec();
  }
}


  
