import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Purchase extends Document {
  @ApiProperty({ example: 'Depot A', description: 'Name of the depot' })
  @Prop({ required: true })
  depotName: string;

  @ApiProperty({ example: 1000, description: 'Amount paid for the purchase' })
  @Prop({ required: true })
  amountPaid: number;

  @ApiProperty({ example: 'Paid', description: 'Payment status (Paid or Credit)' })
  @Prop({ required: true, enum: ['Paid', 'Credit'] })
  paymentStatus: string;
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase); 