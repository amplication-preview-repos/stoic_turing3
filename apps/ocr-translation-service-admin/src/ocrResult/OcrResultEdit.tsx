import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PdfFileTitle } from "../pdfFile/PdfFileTitle";
import { TranslationTitle } from "../translation/TranslationTitle";

export const OcrResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="extractionTime" source="extractionTime" />
        <ReferenceInput source="pdfFile.id" reference="PdfFile" label="PDFFile">
          <SelectInput optionText={PdfFileTitle} />
        </ReferenceInput>
        <TextInput label="text" multiline source="text" />
        <ReferenceArrayInput
          source="translations"
          reference="Translation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TranslationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
