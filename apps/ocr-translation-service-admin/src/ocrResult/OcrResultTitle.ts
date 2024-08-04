import { OcrResult as TOcrResult } from "../api/ocrResult/OcrResult";

export const OCRRESULT_TITLE_FIELD = "id";

export const OcrResultTitle = (record: TOcrResult): string => {
  return record.id?.toString() || String(record.id);
};
