import * as graphql from "@nestjs/graphql";
import { PdfFileResolverBase } from "./base/pdfFile.resolver.base";
import { PdfFile } from "./base/PdfFile";
import { PdfFileService } from "./pdfFile.service";

@graphql.Resolver(() => PdfFile)
export class PdfFileResolver extends PdfFileResolverBase {
  constructor(protected readonly service: PdfFileService) {
    super(service);
  }
}
