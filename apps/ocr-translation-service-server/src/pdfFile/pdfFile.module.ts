import { Module } from "@nestjs/common";
import { PdfFileModuleBase } from "./base/pdfFile.module.base";
import { PdfFileService } from "./pdfFile.service";
import { PdfFileController } from "./pdfFile.controller";
import { PdfFileResolver } from "./pdfFile.resolver";

@Module({
  imports: [PdfFileModuleBase],
  controllers: [PdfFileController],
  providers: [PdfFileService, PdfFileResolver],
  exports: [PdfFileService],
})
export class PdfFileModule {}
