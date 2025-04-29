import { IsNotEmpty, IsString, IsNumber, Min, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateMedicineDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(0)
  stock: number; // Quantity available in stock

  @IsNumber()
  @Min(0)
  price: number; // Price per unit of the medicine

  @IsOptional()
  @IsString()
  description?: string; // Optional field for a description of the medicine
}
