import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { OcrResultTitle } from "../ocrResult/OcrResultTitle";

export const TranslationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="ocrResult.id"
          reference="OcrResult"
          label="OCRResult"
        >
          <SelectInput optionText={OcrResultTitle} />
        </ReferenceInput>
        <TextInput label="translatedText" multiline source="translatedText" />
        <DateTimeInput label="translationTime" source="translationTime" />
      </SimpleForm>
    </Edit>
  );
};
