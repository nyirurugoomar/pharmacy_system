import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePharmacistDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;
}