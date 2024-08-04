import { SortOrder } from "../../util/SortOrder";

export type TranslationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ocrResultId?: SortOrder;
  translatedText?: SortOrder;
  translationTime?: SortOrder;
  updatedAt?: SortOrder;
};
