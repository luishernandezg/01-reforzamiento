import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { Usuario, ReqResListado } from "../interfaces/reqRes";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);

    useEffect(() => {
        // llamado al api
        console.log("useEfect");
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        console.log(`paginaRef: ${paginaRef.current}`);
        const resp = await reqResApi.get<ReqResListado>("/users", {
            params: { page: paginaRef.current },
        });
        console.log(resp);

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        } else {
            paginaRef.current--;
            alert("No hay mas regisrtos");
        }
    };

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    };

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    };

    return {
        usuarios,
        paginaActual: paginaRef.current,
        paginaSiguiente,
        paginaAnterior,
    };
};
