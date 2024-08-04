import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { OCRRESULT_TITLE_FIELD } from "../ocrResult/OcrResultTitle";

export const TranslationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="OCRResult"
          source="ocrresult.id"
          reference="OcrResult"
        >
          <TextField source={OCRRESULT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="translatedText" source="translatedText" />
        <TextField label="translationTime" source="translationTime" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
