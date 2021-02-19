import React from 'react';
// Documentacion del componente 
import PropTypes from 'prop-types';

const Gasto = ({gasto}) => ( 
    <li className="gastos">
        <p>
            {gasto.nombre}
            <span className="gasto">€ {gasto.cantidad} </span>
        </p>
    </li>
);

// Definicion del componente "Gasto", que props se le pasan
Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
 
export default Gasto;