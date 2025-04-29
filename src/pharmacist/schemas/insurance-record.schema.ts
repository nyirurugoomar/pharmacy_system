import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class InsuranceRecord extends Document {
  @Prop({ required: true })
  insuranceCompany: string;

  @Prop({ required: true })
  clientCount: number;

  @Prop({ required: true })
  date: Date;
}

export const InsuranceRecordSchema = SchemaFactory.createForClass(InsuranceRecord); 