import React, { useContext } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario"
import Swal from 'sweetalert2'

const Detalle = () => {
  const { formulario } = useContext(ContextoFormulario);

  const { nombre, apellido, email, nombrePokemon } = formulario;

  const validarInputs = nombre !== "" && apellido !== ""  && email !== ""  && nombrePokemon  !== "" 

  const onSubmit = () => {
    if (!validarInputs) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "completá los campos del formulario"
      })
    } else {
       Swal.fire({
      icon: 'success',
      title: 'Solicitud enviada!'
    })
    }
   
  }
  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {nombre}</p>
          <p>Apellido: {apellido}</p>
          <p>Email: {email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {nombrePokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={onSubmit}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
