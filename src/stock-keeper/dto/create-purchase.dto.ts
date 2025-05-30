import { IsString, IsNumber, IsDate, IsOptional, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseDto {
 

  @ApiProperty({ example: 200, description: 'Total amount of purchase' })
  @IsNumber()
  @Min(0)
  totalAmount: number;

  @ApiProperty({ example: 'ABC Suppliers', description: 'Name of the supplier' })
  @IsString()
  supplier: string;

  @ApiProperty({ example: '2024-03-20', description: 'Date of purchase' })
  @IsDate()
  purchaseDate: Date;

  

  @ApiProperty({ example: 'credit', description: 'Status of the purchase' })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty({ example: 'Regular monthly supply', description: 'Additional notes' })
  @IsString()
  @IsOptional()
  notes?: string;
} 