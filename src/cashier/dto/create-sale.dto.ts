import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentMethod } from '../schemas/sale.schema';

export class SaleItemDto {
  @IsString()
  @IsNotEmpty()
  medicationName: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  unitPrice: number;
}

export class CreateSaleDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleItemDto)
  items: SaleItemDto[];

  @IsNumber()
  totalPrice: number;

  @IsString()
  cashierId: string;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;
}
