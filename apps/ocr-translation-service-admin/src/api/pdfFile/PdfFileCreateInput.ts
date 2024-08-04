import { OcrResultCreateNestedManyWithoutPdfFilesInput } from "./OcrResultCreateNestedManyWithoutPdfFilesInput";

export type PdfFileCreateInput = {
  filePath?: string | null;
  ocrResults?: OcrResultCreateNestedManyWithoutPdfFilesInput;
  uploadTime?: Date | null;
};
