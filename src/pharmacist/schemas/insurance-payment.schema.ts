import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class InsurancePayment extends Document {
  @ApiProperty({ example: 'RSB', description: 'Insurance company name' })
  @Prop({ required: true })
  insuranceCompany: string;

  @ApiProperty({ example: 500, description: 'Amount to be paid' })
  @Prop({ required: true })
  amount: number;

  @ApiProperty({ example: 'Paid', description: 'Payment status (Paid, Not Paid, Pending)' })
  @Prop({ required: true, enum: ['Paid', 'Not Paid', 'Pending'] })
  status: string;

  @ApiProperty({ example: '2024-04-29', description: 'Date of payment (YYYY-MM-DD)' })
  @Prop({ required: true })
  date: Date;
}

export const InsurancePaymentSchema = SchemaFactory.createForClass(InsurancePayment); 