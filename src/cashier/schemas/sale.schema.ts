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
export class Sale {
  @Prop({ type: [SaleItem], required: true })
  items: SaleItem[];  // <= Now multiple products

  @Prop()
  totalPrice: number; // Total for all items

  @Prop()
  cashierId: string;

  @Prop()
  date: Date;

  @Prop({ enum: PaymentMethod, required: true })
  paymentMethod: PaymentMethod;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
