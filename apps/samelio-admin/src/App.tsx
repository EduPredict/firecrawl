import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CursoList } from "./curso/CursoList";
import { CursoCreate } from "./curso/CursoCreate";
import { CursoEdit } from "./curso/CursoEdit";
import { CursoShow } from "./curso/CursoShow";
import { UsuarioList } from "./usuario/UsuarioList";
import { UsuarioCreate } from "./usuario/UsuarioCreate";
import { UsuarioEdit } from "./usuario/UsuarioEdit";
import { UsuarioShow } from "./usuario/UsuarioShow";
import { PerguntaRespostaList } from "./perguntaResposta/PerguntaRespostaList";
import { PerguntaRespostaCreate } from "./perguntaResposta/PerguntaRespostaCreate";
import { PerguntaRespostaEdit } from "./perguntaResposta/PerguntaRespostaEdit";
import { PerguntaRespostaShow } from "./perguntaResposta/PerguntaRespostaShow";
import { SessaoDeEstudoList } from "./sessaoDeEstudo/SessaoDeEstudoList";
import { SessaoDeEstudoCreate } from "./sessaoDeEstudo/SessaoDeEstudoCreate";
import { SessaoDeEstudoEdit } from "./sessaoDeEstudo/SessaoDeEstudoEdit";
import { SessaoDeEstudoShow } from "./sessaoDeEstudo/SessaoDeEstudoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Samélio"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Curso"
          list={CursoList}
          edit={CursoEdit}
          create={CursoCreate}
          show={CursoShow}
        />
        <Resource
          name="Usuario"
          list={UsuarioList}
          edit={UsuarioEdit}
          create={UsuarioCreate}
          show={UsuarioShow}
        />
        <Resource
          name="PerguntaResposta"
          list={PerguntaRespostaList}
          edit={PerguntaRespostaEdit}
          create={PerguntaRespostaCreate}
          show={PerguntaRespostaShow}
        />
        <Resource
          name="SessaoDeEstudo"
          list={SessaoDeEstudoList}
          edit={SessaoDeEstudoEdit}
          create={SessaoDeEstudoCreate}
          show={SessaoDeEstudoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
