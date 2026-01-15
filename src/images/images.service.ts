import { Injectable } from '@nestjs/common';


@Injectable()
export class ImagesService {

  checkImage( file: any ,itemId: string) {
    
    try {

      if (file) {
        return {
          id: itemId,
          "isValid": true,
          "reason": null
          }
    }
  } catch (err){

    return {
      id: itemId,
      "isValid": false,
      "reason": err.message

      }
    }
  }
}