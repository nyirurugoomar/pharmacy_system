import { IsNotEmpty,IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCashierDto {
    @ApiProperty({
        description:'Cashier Name'
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        description:'Cashier Password'
    })
    @IsString()
    @IsNotEmpty()
    password: string
}