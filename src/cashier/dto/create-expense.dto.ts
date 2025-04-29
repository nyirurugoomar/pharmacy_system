import { ApiProperty } from '@nestjs/swagger';

export class CreateExpenseDto {
  @ApiProperty({ example: 'Internet', description: 'Expense category (e.g., Cashpower, Internet)' })
  category: string;

  @ApiProperty({ example: 50, description: 'Amount for the expense category' })
  amount: number;

  @ApiProperty({ example: '2024-04-29', description: 'Date of expense (YYYY-MM-DD)' })
  date: Date;
} 