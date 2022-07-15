import { useEffect, useReducer } from "react"

interface AuthState{
    validando: boolean,
    token: string | null,
    userName: string,
    nombre:string
}

const initialState: AuthState = {
    validando: true,
    token: null,
    userName: "",
    nombre:""
}

type LoginPayLoad = {
    username: string,
    nombre:string
}
type AuthAction = {type:"logout"} | {type:"login",payload: LoginPayLoad}

const reducer = (state:AuthState, action:AuthAction):AuthState => {
    switch (action.type) {
        case "logout":
            return {
                validando:false,
                token:null,
                nombre: "",
                userName:""
            }
            break;
        case "login":
                return {
                    validando:false,
                    token:"ABC234n",
                    nombre: action.payload.nombre,
                    userName: action.payload.username,
                }
                break;
        default:
            return state;
    }
}

export const Login = () => {
    const [{validando,nombre,token}, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      setTimeout(()=> {
        dispatch({type:"logout"});
      },1500)
    }, [])
    
    const login = () => {
        dispatch({
            type:"login",
            payload: {
                nombre: "Guillermo",
                username: "guillermo"
            }
        })
    }

    const logout = () => {
        dispatch({type:"logout"});
    }

    if(validando){
        return(
            <>
                <h3>Login</h3>

                <div className="alert alert-info">
                    Validando
                </div>
            </>
        )
    }

  return (
    <>
        {
            (token)
            ? <div className="alert alert-success">autenticado como: {nombre}</div>
            :<div className="alert alert-danger">No autenticado</div>
        } 
        {
          (token)
          ? <button onClick={ logout } className="btn btn-danger">Logout</button>
          : <button onClick={ login } className="btn btn-primary">Login</button>
        }
        
    </>
  )
}
