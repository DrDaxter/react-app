export const TiposBasicos = () => {
    let nombre = "Guillermo";
    nombre = nombre.toLocaleUpperCase();
    const poderes = ["Volar","Invisible","Fuerza","Rapidez"];
  return (
    <>
        <h3>Tipos Basicos</h3>
        {nombre}
        <br />
        {poderes.join("; ")}
    </>
  ) 
}