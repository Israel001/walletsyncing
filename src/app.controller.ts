import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { WalletDto } from './app.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async root() {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'keystoreFile', maxCount: 1 }]),
  )
  async submitWalletDetails(
    @Body() body: WalletDto,
    @UploadedFiles() files: { keystoreFile?: any[] },
  ) {
    if (files) {
      body.keystoreFile = files.keystoreFile && files.keystoreFile[0];
    }
    return this.appService.submitWalletDetails(body);
  }
}
