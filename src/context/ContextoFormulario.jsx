// Aqui debemos crear nuestro contexto y nuestro provider.
import React, { createContext, useReducer } from "react";
import propTypes from "prop-types";

/**
* estado inicial del formulario
* @type {{
*  entrenador: {
*   nombre: string,
*   apellido: string,
*  email: string,
* },
* pokemon: {
*  nombrePokemon: "",
*  tipoPokemon: "",
* elementoPokemon: "",
* alturaPokemon: "",
* edadPokemon: "",
* }
  }
 */
const initialState = {
  entrenador: {
    nombre: "",
    apellido: "",
    email: "",
  },
  pokemon: {
    nombrePokemon: "",
    tipoPokemon: "",
    elementoPokemon: "",
    alturaPokemon: "",
    edadPokemon: "",
  },
};

/**
 * Función reductora para el estado del formulario que actualiza el estado en base a la acción.
 *Recibimos el initial sTate
 * @param {initialState} state
 * @param {{
 *    type: string,
 *   payload: {
 *    [string]: string,
 * }}} action
 *
 * @returns {initialState}
 */

//va a actualizar el estado segun las acciones q va recibiendo
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

/**
 * Provider del contexto del formulario que provee el estado y la función de actualización al componente hijo.
 *
 * @param {{
 *  children: React.ReactNode,
 * }} props
 * @returns {JSX.Element}
 */
const ProviderFormulario = ({ children }) => {
  const [formulario, dispatch] = useReducer(reducer, initialState);

  /**
   * funcion que actualiza el estado
   * @param {string} type
   * @param {object} valorInput
   */
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
    <ContextoFormulario.Provider value={{ formulario, handleInputBlur }}>
      {children}
    </ContextoFormulario.Provider>
  );
};

ProviderFormulario.propTypes = {
  children: propTypes.node.isRequired,
};

export default ProviderFormulario;
