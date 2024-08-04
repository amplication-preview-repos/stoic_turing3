import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PDFFILE_TITLE_FIELD } from "../pdfFile/PdfFileTitle";

export const OcrResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OCRResults"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="extractionTime" source="extractionTime" />
        <TextField label="ID" source="id" />
        <ReferenceField label="PDFFile" source="pdffile.id" reference="PdfFile">
          <TextField source={PDFFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
