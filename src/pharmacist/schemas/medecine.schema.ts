import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MedicineDocument = Medicine & Document;

@Schema()
export class Medicine {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  stock: number; // Quantity available

  @Prop({ required: true })
  price: number; // Price per unit

  @Prop()
  description: string;

  @Prop({ default: true })
  available: boolean; // If stock=0, we set available=false

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const MedicineSchema = SchemaFactory.createForClass(Medicine);
