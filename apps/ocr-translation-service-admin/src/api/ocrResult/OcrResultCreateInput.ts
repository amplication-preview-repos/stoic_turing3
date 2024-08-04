import { PdfFileWhereUniqueInput } from "../pdfFile/PdfFileWhereUniqueInput";
import { TranslationCreateNestedManyWithoutOcrResultsInput } from "./TranslationCreateNestedManyWithoutOcrResultsInput";

export type OcrResultCreateInput = {
  extractionTime?: Date | null;
  pdfFile?: PdfFileWhereUniqueInput | null;
  text?: string | null;
  translations?: TranslationCreateNestedManyWithoutOcrResultsInput;
};
