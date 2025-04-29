import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseDto {
  @ApiProperty({ example: 'Depot A', description: 'Name of the depot' })
  depotName: string;

  @ApiProperty({ example: 1000, description: 'Amount paid for the purchase' })
  amountPaid: number;

  @ApiProperty({ example: 'Paid', description: 'Payment status (Paid or Credit)' })
  paymentStatus: 'Paid' | 'Credit';
} 