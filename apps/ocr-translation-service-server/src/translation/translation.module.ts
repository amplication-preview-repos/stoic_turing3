import { Module } from "@nestjs/common";
import { TranslationModuleBase } from "./base/translation.module.base";
import { TranslationService } from "./translation.service";
import { TranslationController } from "./translation.controller";
import { TranslationResolver } from "./translation.resolver";

@Module({
  imports: [TranslationModuleBase],
  controllers: [TranslationController],
  providers: [TranslationService, TranslationResolver],
  exports: [TranslationService],
})
export class TranslationModule {}
