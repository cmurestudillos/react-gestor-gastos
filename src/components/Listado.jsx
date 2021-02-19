import React from 'react';
// Componentes
import Gasto from './Gasto';
// Documentacion del componente 
import PropTypes from 'prop-types';

const Listado = ({gastos}) => ( 
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.map(gasto => (
            <Gasto key={gasto.id} gasto={gasto} />
        ))}
    </div>
);

// Definicion del componente "Listado", que props se le pasan
Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default Listado;