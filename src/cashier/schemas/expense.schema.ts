import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Expense extends Document {
  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, enum: ['pending', 'paid'] })
  status: string;

  @Prop({ required: true, enum: ['purchase', 'utility', 'salary', 'other'] })
  type: string;

  @Prop()
  supplier?: string;

  @Prop()
  reference?: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense); 