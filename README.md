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
export class UploadController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    checkPdf(file);

    return { message: 'File uploaded successfully' };
  }
}
```

## Explanation

It works by checking some things:
1. File size (if max provided)
2. Mimetype
3. Pdf version at start of file
4. Ensure the EOF is actually the end of the file (7 chars for some versions, 6 chars for others.)