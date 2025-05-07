import { IsString, IsNumber, IsDate, IsOptional, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseDto {
  @ApiProperty({ example: 'Paracetamol 500mg', description: 'Name of the medicine' })
  @IsString()
  medicineName: string;

  @ApiProperty({ example: 100, description: 'Quantity of medicine purchased' })
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 0.5, description: 'Price per unit' })
  @IsNumber()
  @Min(0)
  unitPrice: number;

  @ApiProperty({ example: 'ABC Suppliers', description: 'Name of the supplier' })
  @IsString()
  supplier: string;

  @ApiProperty({ example: '2024-03-20', description: 'Date of purchase' })
  @IsDate()
  purchaseDate: Date;

  @ApiProperty({ example: 50, description: 'Total amount of purchase' })
  @IsNumber()
  @Min(0)
  totalAmount: number;

  @ApiProperty({ example: 'pending', description: 'Status of the purchase' })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty({ example: 'Regular monthly supply', description: 'Additional notes' })
  @IsString()
  @IsOptional()
  notes?: string;
} 