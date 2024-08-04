import { OcrResultWhereInput } from "./OcrResultWhereInput";
import { OcrResultOrderByInput } from "./OcrResultOrderByInput";

export type OcrResultFindManyArgs = {
  where?: OcrResultWhereInput;
  orderBy?: Array<OcrResultOrderByInput>;
  skip?: number;
  take?: number;
};
