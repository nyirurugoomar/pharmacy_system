import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentMethod } from '../schemas/sale.schema';
import { ApiProperty } from '@nestjs/swagger';

export class SaleItemDto {
    @ApiProperty({
      description:'Medication Name'
    })
  @IsString()
  @IsNotEmpty()
  medicationName: string;

  @ApiProperty({
    description:'Medication Quantity'
  })
  @IsNumber()
  quantity: number;

  @ApiProperty({
    description:'Medication Unit Price'
  })
  @IsNumber()
  unitPrice: number;
}

export class CreateSaleDto {
  @ApiProperty({
    description:'Medication Items'
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleItemDto)
  items: SaleItemDto[];

  @ApiProperty({
    description:'Total Price'
  })
  @IsNumber()
  totalPrice: number;

  @ApiProperty({
    description:'Cashier ID'
  })
  @IsString()
  cashierId: string;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;
}
