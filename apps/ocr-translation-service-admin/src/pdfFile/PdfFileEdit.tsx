import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { OcrResultTitle } from "../ocrResult/OcrResultTitle";

export const PdfFileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="filePath" source="filePath" />
        <ReferenceArrayInput
          source="ocrResults"
          reference="OcrResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OcrResultTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="uploadTime" source="uploadTime" />
      </SimpleForm>
    </Edit>
  );
};
