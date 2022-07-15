import { useState } from "react";

export const useForm = <T extends Record<string,unknown>>(formData:T) => {
    const [formulario, setFormulario] = useState(formData);

    const onChange = (value:string,campo:keyof T) => {
        setFormulario({
            ...formulario,
            [campo]:value
        });
    }

    return{
        formulario,
        onChange,
        ...formulario
    }
}
