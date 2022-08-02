// Aqui debemos crear nuestro contexto y nuestro provider.
import React, {createContext, useState} from 'react'


export const ContextoFormulario = createContext();

   const ProviderFormulario = ({children}) => {
    const [formulario, setFormulario] = useState({
        nombre: "",
        apellido: "",
        email: "",
      });
    
      const handleInputBlur = (valorInput) => {
        const { campo, valor } = valorInput;
    
        setFormulario({
          ...formulario,
          [campo]: valor,
        });
      };

    return (
        <ContextoFormulario.Provider value={{ formulario,
            handleInputBlur}}>
            {children}
        </ContextoFormulario.Provider>
    )
  }

  export default ProviderFormulario;
  