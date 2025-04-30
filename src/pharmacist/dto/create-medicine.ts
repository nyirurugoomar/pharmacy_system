import { IsNotEmpty, IsString, IsNumber, Min, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateMedicineDto {
  @ApiProperty({
        description:'Medicine Name'
    })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description:'Stock'
  })
  @IsNumber()
  @Min(0)
  stock: number; // Quantity available in stock

  @ApiProperty({
    description:'Price'
  })
  @IsNumber()
  @Min(0)
  price: number; // Price per unit of the medicine

  @ApiProperty({
    description:'Description'
  })
  @IsOptional()
  @IsString()
  description?: string; // Optional field for a description of the medicine
}
