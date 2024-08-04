import { Translation as TTranslation } from "../api/translation/Translation";

export const TRANSLATION_TITLE_FIELD = "id";

export const TranslationTitle = (record: TTranslation): string => {
  return record.id?.toString() || String(record.id);
};
