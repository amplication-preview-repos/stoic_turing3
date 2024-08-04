import { SortOrder } from "../../util/SortOrder";

export type PdfFileOrderByInput = {
  createdAt?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadTime?: SortOrder;
};
