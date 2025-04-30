import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePharmacistDto {
    @ApiProperty({
        description:'Pharmacist Name'
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description:'Pharmacist Password'
    })
    @IsString()
    @IsNotEmpty()
    password: string;

    
}