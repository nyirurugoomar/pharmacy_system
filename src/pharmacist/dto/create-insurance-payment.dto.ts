import { ApiProperty } from '@nestjs/swagger';

export class CreateInsurancePaymentDto {
  @ApiProperty({ example: 'RSB', description: 'Insurance company name' })
  insuranceCompany: string;

  @ApiProperty({ example: 500, description: 'Amount to be paid' })
  amount: number;

  @ApiProperty({ example: 'Paid', description: 'Payment status (Paid, Not Paid, Pending)' })
  status: 'Paid' | 'Not Paid' | 'Pending';

  @ApiProperty({ example: '2024-04-29', description: 'Date of payment (YYYY-MM-DD)' })
  date: Date;
} 