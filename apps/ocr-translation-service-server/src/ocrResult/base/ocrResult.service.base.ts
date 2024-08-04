/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  OcrResult as PrismaOcrResult,
  Translation as PrismaTranslation,
  PdfFile as PrismaPdfFile,
} from "@prisma/client";

import { OcrResultCreateInput } from "./OcrResultCreateInput";

export class OcrResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OcrResultCountArgs, "select">
  ): Promise<number> {
    return this.prisma.ocrResult.count(args);
  }

  async ocrResults(
    args: Prisma.OcrResultFindManyArgs
  ): Promise<PrismaOcrResult[]> {
    return this.prisma.ocrResult.findMany(args);
  }
  async ocrResult(
    args: Prisma.OcrResultFindUniqueArgs
  ): Promise<PrismaOcrResult | null> {
    return this.prisma.ocrResult.findUnique(args);
  }
  async createOcrResult(
    args: Prisma.OcrResultCreateArgs
  ): Promise<PrismaOcrResult> {
    return this.prisma.ocrResult.create(args);
  }
  async updateOcrResult(
    args: Prisma.OcrResultUpdateArgs
  ): Promise<PrismaOcrResult> {
    return this.prisma.ocrResult.update(args);
  }
  async deleteOcrResult(
    args: Prisma.OcrResultDeleteArgs
  ): Promise<PrismaOcrResult> {
    return this.prisma.ocrResult.delete(args);
  }

  async findTranslations(
    parentId: string,
    args: Prisma.TranslationFindManyArgs
  ): Promise<PrismaTranslation[]> {
    return this.prisma.ocrResult
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .translations(args);
  }

  async getPdfFile(parentId: string): Promise<PrismaPdfFile | null> {
    return this.prisma.ocrResult
      .findUnique({
        where: { id: parentId },
      })
      .pdfFile();
  }
  async ProcessOcr(args: OcrResultCreateInput): Promise<OcrResultCreateInput> {
    throw new Error("Not implemented");
  }
}
