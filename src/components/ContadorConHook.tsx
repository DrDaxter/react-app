import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {
    const {valor,acumular} = useCounter(0);
  return (
    <>
        <h3>
            Contador con hook <small>{ valor }</small>
        </h3>

        <button onClick={() => acumular(1)} className="btn btn-primary">
            +1
        </button>
        &nbsp;
        <button onClick={()=> acumular(-1)} className="btn btn-primary">
            -1
        </button>
    </>
  )
}
