import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Purchase extends Document {
  @ApiProperty({ example: 'Paracetamol 500mg', description: 'Name of the medicine' })
  @Prop({ required: true })
  medicineName: string;

  @ApiProperty({ example: 100, description: 'Quantity of medicine purchased' })
  @Prop({ required: true })
  quantity: number;

  @ApiProperty({ example: 0.5, description: 'Price per unit' })
  @Prop({ required: true })
  unitPrice: number;

  @ApiProperty({ example: 'ABC Suppliers', description: 'Name of the supplier' })
  @Prop({ required: true })
  supplier: string;

  @ApiProperty({ example: '2024-03-20', description: 'Date of purchase' })
  @Prop({ required: true })
  purchaseDate: Date;

  @ApiProperty({ example: 50, description: 'Total amount of purchase' })
  @Prop({ required: true })
  totalAmount: number;

  @ApiProperty({ example: 'pending', description: 'Status of the purchase' })
  @Prop({ default: 'pending' })
  status: string;

  @ApiProperty({ example: 'Regular monthly supply', description: 'Additional notes' })
  @Prop()
  notes: string;
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase); 