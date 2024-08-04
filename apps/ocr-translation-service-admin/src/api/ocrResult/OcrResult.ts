import { PdfFile } from "../pdfFile/PdfFile";
import { Translation } from "../translation/Translation";

export type OcrResult = {
  createdAt: Date;
  extractionTime: Date | null;
  id: string;
  pdfFile?: PdfFile | null;
  text: string | null;
  translations?: Array<Translation>;
  updatedAt: Date;
};
