import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OcrResultService } from "./ocrResult.service";
import { OcrResultControllerBase } from "./base/ocrResult.controller.base";

@swagger.ApiTags("ocrResults")
@common.Controller("ocrResults")
export class OcrResultController extends OcrResultControllerBase {
  constructor(protected readonly service: OcrResultService) {
    super(service);
  }
}
