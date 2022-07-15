import { useEffect, useRef, useState } from "react"
import { reqRes } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interfaces/ReqRes"

export const useUsuarios = () => {
    const pageRef = useRef(1);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
       return ()=>{getUsers()};
    }, []);

    const getUsers = () => {
        console.log(pageRef.current);
        reqRes.get<ReqResListado>('/users',{params:{page:pageRef.current}}).then(res => {
            if(res.data.data.length > 0){
                setUsuarios(res.data.data);
            }else{
                pageRef.current--;
                //alert("No hay datos");
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const renderUsuarios = (usuario:Usuario) => {
        return(
            <tr key={usuario.id}>
                <td>
                    <img src={usuario.avatar} alt="" style={{
                        width:35,
                        borderRadius: 100
                    }}/>
                </td>
                <td>{usuario.first_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }

    const paginaSiguiente = () => {
        pageRef.current++;
        getUsers();
    }

    const paginaAnterior = () => {
        if(pageRef.current > 1){
            pageRef.current--;
            getUsers();
        }
    }

    return {
        usuarios,
        renderUsuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
