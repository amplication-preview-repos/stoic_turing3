import { OcrResultWhereUniqueInput } from "../ocrResult/OcrResultWhereUniqueInput";

export type TranslationUpdateInput = {
  ocrResult?: OcrResultWhereUniqueInput | null;
  translatedText?: string | null;
  translationTime?: Date | null;
};
