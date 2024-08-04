import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PDFFILE_TITLE_FIELD } from "./PdfFileTitle";

export const PdfFileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="filePath" source="filePath" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadTime" source="uploadTime" />
        <ReferenceManyField
          reference="OcrResult"
          target="pdfFileId"
          label="OCRResults"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="extractionTime" source="extractionTime" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="PDFFile"
              source="pdffile.id"
              reference="PdfFile"
            >
              <TextField source={PDFFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
