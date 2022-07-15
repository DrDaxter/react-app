import { json } from "stream/consumers"

export const ObjetosLiterales = () => {
    const persona = {
        nomber:"Guillermo",
        edad:22,
        pais:{
            nombre:"El Salvador"
        }
    }
  return (
    <>
        <h3>Objetis literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona,null,2)}
            </pre>
        </code>
    </>
  )
}
