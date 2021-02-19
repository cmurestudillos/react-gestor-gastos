import React, { Fragment} from 'react';
// Documentacion del componente 
import PropTypes from 'prop-types';
// Helpers
import { revisarPresupuesto } from '../helpers/helpers';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: € {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: € {restante}
            </div>
        </Fragment>

     );
}

// Definicion del componente "Listado", que props se le pasan
ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;