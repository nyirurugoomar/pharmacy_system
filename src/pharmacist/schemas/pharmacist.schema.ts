import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PharmacistDocument = Pharmacist & Document;

@Schema()
export class Pharmacist {
  @Prop({ required: true })
  name: string;


  @Prop({required:true})
  password: string;
}

export const PharmacistSchema = SchemaFactory.createForClass(Pharmacist);
