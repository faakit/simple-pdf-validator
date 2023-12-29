# Simple pdf validator

Simple PDF validations with multer files.
So you can assure people are not trying to upload something else to your server with `pdf` extension.

## Install

NPM:
```bash
npm install pdf-validator
```

Yarn
```bash
yarn add pdf-validator
```

## Usage


NestJs example
```typescript
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { checkPdf } from 'pdf-validator'

@Controller()
export class ExamsController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    checkPdf(file);

    return { message: 'File uploaded successfully' };
  }
}
```