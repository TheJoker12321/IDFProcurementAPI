import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipe, UploadedFiles, FileTypeValidator, MaxFileSizeValidator } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('check/:itemId')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 250 * 1024 * 1024}),
        new FileTypeValidator({ fileType: 'png' }),
      ],
    }),
  ) file: Express.Multer.File,  @Param('itemId') itemId: string) {

    console.log(typeof file, file);
    
    return this.imagesService.checkImage(file, itemId);
  }

}