export const TiposBasicos = () => {
  const nombre: string = "Luis";
  const edad = 35;
  //   const estaActivo: boolean = false;
  const poderes = ["Velocidad", "Volar", "Resperar bajo el agua"];

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}
      <br />
      {poderes.join(",")}
    </>
  );
};
