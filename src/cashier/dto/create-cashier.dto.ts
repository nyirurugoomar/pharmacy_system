import { IsNotEmpty,IsString } from 'class-validator';


export class CreateCashierDto {
    @IsString()
    @IsNotEmpty()
    name: string


    @IsString()
    @IsNotEmpty()
    password: string
}