import { SortOrder } from "../../util/SortOrder";

export type OcrResultOrderByInput = {
  createdAt?: SortOrder;
  extractionTime?: SortOrder;
  id?: SortOrder;
  pdfFileId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
