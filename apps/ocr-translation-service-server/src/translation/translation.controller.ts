import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TranslationService } from "./translation.service";
import { TranslationControllerBase } from "./base/translation.controller.base";

@swagger.ApiTags("translations")
@common.Controller("translations")
export class TranslationController extends TranslationControllerBase {
  constructor(protected readonly service: TranslationService) {
    super(service);
  }
}
