import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Purchase extends Document {
  

  

  @ApiProperty({ example: 200, description: 'Total amount of purchase' })
  @Prop({ required: true })
   totalAmount: number;

  @ApiProperty({ example: 'ABC Suppliers', description: 'Name of the supplier' })
  @Prop({ required: true })
  supplier: string;

  @ApiProperty({ example: '2024-03-20', description: 'Date of purchase' })
  @Prop({ required: true })
  purchaseDate: Date;


  @ApiProperty({ example: 'credit', description: 'Status of the purchase' })
  @Prop({ default: 'credit' })
  status: string;

  @ApiProperty({ example: 'Regular monthly supply', description: 'Additional notes' })
  @Prop()
  notes: string;
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase); 