import * as graphql from "@nestjs/graphql";
import { OcrResultResolverBase } from "./base/ocrResult.resolver.base";
import { OcrResult } from "./base/OcrResult";
import { OcrResultService } from "./ocrResult.service";

@graphql.Resolver(() => OcrResult)
export class OcrResultResolver extends OcrResultResolverBase {
  constructor(protected readonly service: OcrResultService) {
    super(service);
  }
}
