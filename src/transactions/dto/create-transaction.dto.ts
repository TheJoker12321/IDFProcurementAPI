import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator"

export class CreateAmmunitionDto {

    @IsNotEmpty()
    id: string 

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    type: string

    @IsNotEmpty()
    @IsInt()
    quantity: number

    @IsNotEmpty()
    @IsInt()
    pricePerUnit: number


}


export class CreateTransactionDto {

    @IsNotEmpty()
    @IsArray()
    purchases: CreateAmmunitionDto[]
}
