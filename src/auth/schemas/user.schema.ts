import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({ example: 'johndoe', description: 'Unique username for the user' })
  @Prop({ required: true, unique: true })
  username: string;

  @ApiProperty({ example: 'hashedpassword', description: 'Hashed password' })
  @Prop({ required: true })
  password: string;

  @ApiProperty({ example: 'pharmacist', description: 'Role of the user (admin, pharmacist, cashier, stock-keeper)' })
  @Prop({ required: true, enum: ['admin', 'pharmacist', 'cashier', 'stock-keeper'] })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User); 