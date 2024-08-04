import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PdfFileList } from "./pdfFile/PdfFileList";
import { PdfFileCreate } from "./pdfFile/PdfFileCreate";
import { PdfFileEdit } from "./pdfFile/PdfFileEdit";
import { PdfFileShow } from "./pdfFile/PdfFileShow";
import { OcrResultList } from "./ocrResult/OcrResultList";
import { OcrResultCreate } from "./ocrResult/OcrResultCreate";
import { OcrResultEdit } from "./ocrResult/OcrResultEdit";
import { OcrResultShow } from "./ocrResult/OcrResultShow";
import { TranslationList } from "./translation/TranslationList";
import { TranslationCreate } from "./translation/TranslationCreate";
import { TranslationEdit } from "./translation/TranslationEdit";
import { TranslationShow } from "./translation/TranslationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"OCRTranslationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PdfFile"
          list={PdfFileList}
          edit={PdfFileEdit}
          create={PdfFileCreate}
          show={PdfFileShow}
        />
        <Resource
          name="OcrResult"
          list={OcrResultList}
          edit={OcrResultEdit}
          create={OcrResultCreate}
          show={OcrResultShow}
        />
        <Resource
          name="Translation"
          list={TranslationList}
          edit={TranslationEdit}
          create={TranslationCreate}
          show={TranslationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
