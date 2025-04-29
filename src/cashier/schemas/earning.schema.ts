import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Earning extends Document {
  @Prop({ required: true })
  posAmount: number;

  @Prop({ required: true })
  cashAmount: number;

  @Prop({ required: true })
  momoAmount: number;

  @Prop({ required: true })
  date: Date;
}

export const EarningSchema = SchemaFactory.createForClass(Earning); 