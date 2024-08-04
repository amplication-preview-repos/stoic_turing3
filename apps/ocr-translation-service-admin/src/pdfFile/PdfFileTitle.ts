import { PdfFile as TPdfFile } from "../api/pdfFile/PdfFile";

export const PDFFILE_TITLE_FIELD = "filePath";

export const PdfFileTitle = (record: TPdfFile): string => {
  return record.filePath?.toString() || String(record.id);
};
