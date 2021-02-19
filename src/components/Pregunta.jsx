import React, { Fragment, useState } from 'react';
// Documentacion del componente 
import PropTypes from 'prop-types';
// Componentes
import Error from './Error';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    // definir el state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError] = useState(false);

    // Función que lee el presupuesto
    //------------------------------------------------------
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) )
    }

    // Envio del formulario para definir el presupuesto
    //------------------------------------------------------
    const agregarPresupuesto = e => {
        // No enviar el query string y ni cargar la pagina
        e.preventDefault();

        // Validar formulario
        if(cantidad < 1 || isNaN( cantidad ) ) {
            guardarError(true);
            return;
        }

        // Si pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Presupuesto mensual</h2>
            { error ? <Error mensaje="El Presupuesto es Incorrecto." />  : null }
            <form onSubmit={agregarPresupuesto}>
                <label htmlFor="presupuesto">Introduce tu presupuesto</label>
                <input id="presupuesto" type="number" className="u-full-width" placeholder="Ej. 1000" onChange={definirPresupuesto}  />
                <button type="submit" className="button-primary u-full-width">Definir Presupuesto</button>
            </form>
        </Fragment>
     );
}

// Definicion del componente "Pregunta", que props se le pasan
Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;