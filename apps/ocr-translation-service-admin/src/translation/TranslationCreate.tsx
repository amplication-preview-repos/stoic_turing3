import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { OcrResultTitle } from "../ocrResult/OcrResultTitle";

export const TranslationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
