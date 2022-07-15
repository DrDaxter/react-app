import { useUsuarios } from "../hooks/useUsuarios"

export const Usuarios = () => {

    const {usuarios,renderUsuarios,paginaSiguiente,paginaAnterior} = useUsuarios();
  return (
    <>
        <h3>Usuarios: </h3>

        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
               {
                usuarios.map(usuario => renderUsuarios(usuario))
               }
            </tbody>
        </table>

        <button onClick={()=> paginaSiguiente()} className="btn btn-primary">
            Siguiente
        </button>
        &nbsp;
        <button onClick={()=> paginaAnterior()} className="btn btn-primary">
            Anterior
        </button>
    </>
  )
}
