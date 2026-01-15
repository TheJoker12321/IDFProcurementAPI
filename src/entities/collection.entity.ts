import { IsString } from "class-validator";
import { Column, DataType, Min, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

@Table
export class Collection extends Model {

    @PrimaryKey
    @Column
    declare id: string 

    @Column
    name: string

    @Column
    type: string

    @Min(0)
    @Column
    quantity: number

    @Min(1)
    @Column
    pricePerUnit: number

    @Column({defaultValue: false})
    hasImage: boolean


}
