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
import { OCRRESULT_TITLE_FIELD } from "../ocrResult/OcrResultTitle";

export const TranslationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Translations"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
