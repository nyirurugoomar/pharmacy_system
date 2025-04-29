import { ApiProperty } from '@nestjs/swagger';

export class CreateInsuranceRecordDto {
  @ApiProperty({ example: 'RSB', description: 'Insurance company name' })
  insuranceCompany: string;

  @ApiProperty({ example: 10, description: 'Number of clients per insurance' })
  clientCount: number;

  @ApiProperty({ example: '2024-04-29', description: 'Date of record (YYYY-MM-DD)' })
  date: Date;
} 