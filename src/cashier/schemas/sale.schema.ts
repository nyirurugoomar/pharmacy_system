import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SaleDocument = Sale & Document;

export enum PaymentMethod {
  MOMO = 'MOMO',
  CASH = 'CASH',
  CARD = 'POS',
}

export class SaleItem {
    @Prop({ required: true })
    medicationName: string;
  
    @Prop({ required: true })
    quantity: number;
  
    @Prop({ required: true })
    unitPrice: number;
  }

@Schema()
export class Insurance {
  @Prop({ required: true })
  amount: number;

  @Prop({ required: true, enum: ['pending', 'paid'] })
  status: string;

  @Prop()
  provider: string;
}

@Schema()
export class Sale extends Document {
  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true, enum: ['cash', 'pos', 'momo'] })
  paymentMethod: string;

  @Prop({ type: Insurance })
  insurance?: Insurance;

  @Prop()
  customerName: string;

  @Prop()
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
