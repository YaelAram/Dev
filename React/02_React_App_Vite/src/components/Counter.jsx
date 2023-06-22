import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const handdleCounter = ( currentValue, { type, init } ) => {
    switch( type ){
        case 'add': return currentValue + 1;
        case  'substract': return currentValue - 1;
        default: return init;
    }
};

function Counter( { value } ){
    const [ counter, dispath ] = useReducer( handdleCounter, value );

    return (
        <React.Fragment>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>
            <input type="button" aria-label="btn-substract" value="Substract 1" onClick={ () => dispath( { type: 'substract' } ) }/>
            <input type="button" aria-label="btn-reset" value="Reset" onClick={ () => dispath( { type: 'reset', init: value } ) }/>
            <input type="button" aria-label="btn-add" value="Add 1" onClick={ () => dispath( { type: 'add' } ) }/>
        </React.Fragment>
    );
};

Counter.propTypes = {
    value: PropTypes.number.isRequired
};

export default Counter;
