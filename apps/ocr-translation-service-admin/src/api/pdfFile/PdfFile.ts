import { OcrResult } from "../ocrResult/OcrResult";

export type PdfFile = {
  createdAt: Date;
  filePath: string | null;
  id: string;
  ocrResults?: Array<OcrResult>;
  updatedAt: Date;
  uploadTime: Date | null;
};
