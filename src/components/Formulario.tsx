import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const Formulario = () => {
    const { formulario,onChange,email,password } = useForm({
        email:"test@test.com",
        password:"1234"
    });
  return (
    <>
        <h3>Formulario</h3>

        <input 
            type="text" 
            className="form-control" 
            placeholder="Email" 
            value={email}
            onChange={({target})=> onChange(target.value,"email")}/>

        <input 
            type="text" 
            className="form-control mt-2 mb-2" 
            placeholder="Password" 
            value={password}
            onChange={({target})=> onChange(target.value,"password")}/>

        <code>
            <pre>
                {JSON.stringify(formulario,null,2)}
            </pre>
        </code>
    </>
  )
}
