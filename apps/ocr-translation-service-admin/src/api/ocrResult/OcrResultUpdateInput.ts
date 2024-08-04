import { PdfFileWhereUniqueInput } from "../pdfFile/PdfFileWhereUniqueInput";
import { TranslationUpdateManyWithoutOcrResultsInput } from "./TranslationUpdateManyWithoutOcrResultsInput";

export type OcrResultUpdateInput = {
  extractionTime?: Date | null;
  pdfFile?: PdfFileWhereUniqueInput | null;
  text?: string | null;
  translations?: TranslationUpdateManyWithoutOcrResultsInput;
};
