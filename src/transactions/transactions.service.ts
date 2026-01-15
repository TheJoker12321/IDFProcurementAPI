import { Inject, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { readJsonFile } from 'src/utils/readFile';
import fs from 'fs'
import { Collection } from 'src/entities/collection.entity';


@Injectable()
export class TransactionsService {

  constructor(@Inject('COLLECTION_REPOSITORY') private collectionRepository: typeof Collection) {}

  async purchase(createTransactionDto: CreateTransactionDto) : Promise<object | void> {

    const budget: object  = JSON.parse(await readJsonFile('C:/Users/internet/Desktop/IDFProcurementAPI/src/Budget/budget.json'))

    const result: object[] = []

    for (const ammunition of createTransactionDto.purchases) {

      console.log(ammunition);
      console.log(ammunition.id);
      
      
      
      const ammunitionCost: number = ammunition.pricePerUnit * ammunition.quantity

      console.log(ammunitionCost);
      

      if (budget["budget"] - ammunitionCost < 0) {

        throw new Error('you have no money for this ammuition')

      }

      budget["budget"] -= ammunitionCost

      await fs.promises.writeFile('C:/Users/internet/Desktop/IDFProcurementAPI/src/Budget/budget.json', JSON.stringify(budget))

      const collaction = await this.collectionRepository.findOne<Collection>({where: {id : ammunition.id}})
      console.log(collaction);
      

      if (collaction) {

        const newQuantity: number = collaction.dataValues.quantity + ammunition.quantity
        console.log(newQuantity);
        

        await this.collectionRepository.update({quantity: newQuantity}, {where: {id : collaction.id}})
      
        result.push({ id: ammunition.id, newQuantity, spent: ammunitionCost})
      
      } else {
        console.log(typeof ammunition);
        

        ammunition["hasImage"] = false
        console.log(ammunition);
        
        await this.collectionRepository.create({...ammunition})

        result.push({id: ammunition.id, newQuantity: ammunition.quantity, spent: ammunitionCost})
      }

    }

    return result
    
  }

}
