import React, { useState } from 'react';
// Documentacion del componente 
import PropTypes from 'prop-types';
// Libreria para generar id
import shortid from 'shortid';
// Componentes
import Error from './Error';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    // definir el state
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [ error, guardarError] = useState(false);

    
    // Cuando el usuario agrega un gasto
    //------------------------------------------------------
    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN( cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // construir el gasto
        const gasto = {
            nombre, 
            cantidad, 
            id: shortid.generate()
        }

        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // resetear el form
        guardarNombre('');
        guardarCantidad(0);
    }

    return ( 
        <form onSubmit={agregarGasto}>
            <h2>A&ntilde;ade tus gastos aquí</h2>
            { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null }
            <div className="campo">
                <label htmlFor="nombregasto">Nombre Gasto</label>
                <input id="nombregasto" type="text" className="u-full-width" placeholder="Ej. Transporte" value={nombre} onChange={e => guardarNombre(e.target.value)} />
            </div>
            <div className="campo">
                <label htmlFor="cantidadgasto">Cantidad Gasto</label>
                <input id="cantidadgasto" type="number" className="u-full-width" placeholder="Ej. 300" value={cantidad} onChange={e => guardarCantidad( parseInt( e.target.value, 10 ) )} />
            </div>
            <button type="submit" className="button-primary u-full-width">A&ntilde;adir Gasto</button>
        </form>

     );
}

// Definicion del componente "Formulario", que props se le pasan
Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;