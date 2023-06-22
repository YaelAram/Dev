import React from 'react';
import { useCounter } from '../hooks/useCounter';

export function Counter2( { initialValue, step, minValue, maxValue } ) {
    const { counter, increment, decrement, reset } = useCounter( initialValue, minValue, maxValue );

    return(
        <React.Fragment>
            <h1>Counter: { counter }</h1>
            <input type="button" value={ `-${ step }` } onClick={ () => decrement( step ) } />
            <input type="button" value="Reset" onClick={ reset } />
            <input type="button" value={ `+${ step }` } onClick={ () => increment( step ) } />
        </React.Fragment>
    );
};
