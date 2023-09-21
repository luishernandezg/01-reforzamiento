export const Funciones = () => {
    const sumar = (a: number, b: number): number => {
        return a + b;
    };

    return (
        <>
            <h3>Funciomes</h3>
            <span>El resutlado es: {sumar(1, 2)}</span>
        </>
    );
};
