import * as graphql from "@nestjs/graphql";
import { TranslationResolverBase } from "./base/translation.resolver.base";
import { Translation } from "./base/Translation";
import { TranslationService } from "./translation.service";

@graphql.Resolver(() => Translation)
export class TranslationResolver extends TranslationResolverBase {
  constructor(protected readonly service: TranslationService) {
    super(service);
  }
}
