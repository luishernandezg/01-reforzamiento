import { useState } from "react";
import { useForm } from "../hooks/useForm";

const Formularios = () => {
    const { formulario, onChange, email, password } = useForm({
        email: "test@test.com",
        password: "1234",
    });

    return (
        <div>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={({ target }) => onChange(target.value, "email")}
            ></input>
            <input
                type="text"
                className="form-control mt-2 mb2"
                placeholder="Password"
                value={password}
                onChange={({ target }) => onChange(target.value, "password")}
            ></input>
            <code>
                <pre>{JSON.stringify(formulario, null, 2)}</pre>
            </code>
        </div>
    );
};

export default Formularios;
