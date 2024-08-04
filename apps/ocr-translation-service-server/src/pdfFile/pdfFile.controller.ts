import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PdfFileService } from "./pdfFile.service";
import { PdfFileControllerBase } from "./base/pdfFile.controller.base";

@swagger.ApiTags("pdfFiles")
@common.Controller("pdfFiles")
export class PdfFileController extends PdfFileControllerBase {
  constructor(protected readonly service: PdfFileService) {
    super(service);
  }
}
