import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { OCRRESULT_TITLE_FIELD } from "./OcrResultTitle";
import { PDFFILE_TITLE_FIELD } from "../pdfFile/PdfFileTitle";

export const OcrResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="extractionTime" source="extractionTime" />
        <TextField label="ID" source="id" />
        <ReferenceField label="PDFFile" source="pdffile.id" reference="PdfFile">
          <TextField source={PDFFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Translation"
          target="ocrResultId"
          label="Translations"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
