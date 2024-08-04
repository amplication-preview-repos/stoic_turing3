import { Module } from "@nestjs/common";
import { OcrResultModuleBase } from "./base/ocrResult.module.base";
import { OcrResultService } from "./ocrResult.service";
import { OcrResultController } from "./ocrResult.controller";
import { OcrResultResolver } from "./ocrResult.resolver";

@Module({
  imports: [OcrResultModuleBase],
  controllers: [OcrResultController],
  providers: [OcrResultService, OcrResultResolver],
  exports: [OcrResultService],
})
export class OcrResultModule {}
