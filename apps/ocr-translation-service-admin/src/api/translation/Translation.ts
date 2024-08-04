import { OcrResult } from "../ocrResult/OcrResult";

export type Translation = {
  createdAt: Date;
  id: string;
  ocrResult?: OcrResult | null;
  translatedText: string | null;
  translationTime: Date | null;
  updatedAt: Date;
};
