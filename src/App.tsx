import React from "react";
// import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";
// import { Contador } from "./components/Contador";
// import { ContadorConHook } from "./components/ContadorConHook";
// import { ObjetosLoterales } from "./typescript/ObjetosLoterales";
// import { Funciones } from "./typescript/Funciones";
// import { TiposBasicos } from "./typescript/TiposBasicos";

const App = () => {
    return (
        <div className="mt-2">
            <h1>Introduccion a TS - react</h1>
            <hr />
            {/* <TiposBasicos /> */}
            {/* <ObjetosLoterales /> */}
            {/* <Funciones /> */}
            {/* <Contador /> */}
            {/* <ContadorConHook /> */}
            {/* <Login /> */}
            <Usuarios />
        </div>
    );
};

export default App;
