import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OcrResultServiceBase } from "./base/ocrResult.service.base";

@Injectable()
export class OcrResultService extends OcrResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
