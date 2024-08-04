import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OcrResultListRelationFilter } from "../ocrResult/OcrResultListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PdfFileWhereInput = {
  filePath?: StringNullableFilter;
  id?: StringFilter;
  ocrResults?: OcrResultListRelationFilter;
  uploadTime?: DateTimeNullableFilter;
};
