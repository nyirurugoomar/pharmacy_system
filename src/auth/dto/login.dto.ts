import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'admin', description: 'Username of the user' })
  username: string;
 
  @ApiProperty({ example: 'admin123', description: 'Password of the user' })
  password: string;
} 