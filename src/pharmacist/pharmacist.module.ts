import { Module } from '@nestjs/common';
import { PharmacistService } from './pharmacist.service';
import { PharmacistController } from './pharmacist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PharmacistSchema } from './schemas/pharmacist.schema';
import { Medicine, MedicineSchema } from './schemas/medecine.schema';
import { InsuranceRecord, InsuranceRecordSchema } from './schemas/insurance-record.schema';
import { InsurancePayment, InsurancePaymentSchema } from './schemas/insurance-payment.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: Medicine.name, schema: MedicineSchema }]),
    MongooseModule.forFeature([{ name: InsuranceRecord.name, schema: InsuranceRecordSchema }]),
    MongooseModule.forFeature([{ name: InsurancePayment.name, schema: InsurancePaymentSchema }]),
  ],
  providers: [PharmacistService],
  controllers: [PharmacistController]
})
export class PharmacistModule {}
