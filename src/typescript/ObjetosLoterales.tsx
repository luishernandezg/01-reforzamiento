import React from "react";

interface Persona {
    nombreCompelto: string;
    edad: string;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLoterales = () => {
    const persona: Persona = {
        nombreCompelto: "Fernando",
        edad: "35",
        direccion: {
            pais: "Canadá",
            casaNo: 615,
        },
    };

    return (
        <>
            <h3>Objetos Literalesa</h3>

            <code>
                <pre>{JSON.stringify(persona, null, 2)}</pre>
            </code>
        </>
    );
};
