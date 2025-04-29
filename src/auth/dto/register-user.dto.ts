import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiProperty({ example: 'johndoe', description: 'Unique username for the user' })
  username: string;

  @ApiProperty({ example: 'password123', description: 'Password for the user' })
  password: string;

  @ApiProperty({ example: 'pharmacist', description: 'Role of the user (admin, pharmacist, cashier, stock-keeper)' })
  role: 'admin' | 'pharmacist' | 'cashier' | 'stock-keeper';
} 