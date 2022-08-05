// Aqui debemos crear nuestro contexto y nuestro provider.
import React, {createContext, useReducer} from 'react'

const initialState = {
  entrenador: {
    nombre: "",
    apellido: "",
    email: ""
  },
  pokemon: {
    nombrePokemon: "",
    tipoPokemon: "",
    elementoPokemon: "",
    alturaPokemon: "",
    edadPokemon: "",
  }
}
const reducer = (state, action) => {
  switch (action.type) {
    case "ACTUALIZAR_ENTRENADOR":
      return {
        ...state,
        entrenador: {
          ...state.entrenador,
          ...action.payload,
        },
      };
    case "ACTUALIZAR_POKEMON":
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export const ContextoFormulario = createContext();

   const ProviderFormulario = ({children}) => {

    const [formulario, dispatch] = useReducer(reducer, initialState);
    
    const handleInputBlur = (type, valorInput) => {
      const { campo, valor } = valorInput;
      dispatch({
        type,
        payload: {
          [campo]: valor,
        },
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
  