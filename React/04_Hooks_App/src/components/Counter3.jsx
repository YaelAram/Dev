import React, { useState } from 'react';
import { useCounter } from '../hooks';
import { CounterLabel } from './';

export function Counter3() {
    const { counter, increment } = useCounter( 0, -5, 100 );
    const [ show, setShow ] = useState( false );

    const handleOnClick = ( { target } ) => {
        setShow( !show );
        target.value = `Show/Hide ${ JSON.stringify( show ) }`;
    };

    return (
        <React.Fragment>
            <h1>Counter: <CounterLabel value={ counter } /></h1>
            <input type="button" value="+1" onClick={ () => increment() } />
            <input type="button" value={ `Show/Hide ${ JSON.stringify( show ) }` } onClick={ handleOnClick } />
        </React.Fragment>
    );
};
