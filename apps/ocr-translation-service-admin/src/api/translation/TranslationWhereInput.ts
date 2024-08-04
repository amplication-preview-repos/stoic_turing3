import { StringFilter } from "../../util/StringFilter";
import { OcrResultWhereUniqueInput } from "../ocrResult/OcrResultWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TranslationWhereInput = {
  id?: StringFilter;
  ocrResult?: OcrResultWhereUniqueInput;
  translatedText?: StringNullableFilter;
  translationTime?: DateTimeNullableFilter;
};
