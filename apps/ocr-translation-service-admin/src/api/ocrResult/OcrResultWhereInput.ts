import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PdfFileWhereUniqueInput } from "../pdfFile/PdfFileWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TranslationListRelationFilter } from "../translation/TranslationListRelationFilter";

export type OcrResultWhereInput = {
  extractionTime?: DateTimeNullableFilter;
  id?: StringFilter;
  pdfFile?: PdfFileWhereUniqueInput;
  text?: StringNullableFilter;
  translations?: TranslationListRelationFilter;
};
