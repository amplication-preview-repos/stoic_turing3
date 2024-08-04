import { OcrResultUpdateManyWithoutPdfFilesInput } from "./OcrResultUpdateManyWithoutPdfFilesInput";

export type PdfFileUpdateInput = {
  filePath?: string | null;
  ocrResults?: OcrResultUpdateManyWithoutPdfFilesInput;
  uploadTime?: Date | null;
};
