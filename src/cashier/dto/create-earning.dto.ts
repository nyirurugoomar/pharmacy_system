import { ApiProperty } from '@nestjs/swagger';

export class CreateEarningDto {
  @ApiProperty({ example: 100, description: 'Amount received via POS' })
  posAmount: number;

  @ApiProperty({ example: 200, description: 'Amount received in cash' })
  cashAmount: number;

  @ApiProperty({ example: 150, description: 'Amount received via MOMO' })
  momoAmount: number;

  @ApiProperty({ example: '2024-04-29', description: 'Date of earning (YYYY-MM-DD)' })
  date: Date;
} 