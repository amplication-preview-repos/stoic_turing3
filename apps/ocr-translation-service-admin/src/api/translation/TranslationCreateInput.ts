import { OcrResultWhereUniqueInput } from "../ocrResult/OcrResultWhereUniqueInput";

export type TranslationCreateInput = {
  ocrResult?: OcrResultWhereUniqueInput | null;
  translatedText?: string | null;
  translationTime?: Date | null;
};
