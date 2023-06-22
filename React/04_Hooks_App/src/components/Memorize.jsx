import React, { useState, useMemo } from 'react';
import { useCounter } from '../hooks';

const iterate = ( times ) => {
    for( let i = 0 ; i < times ; i++ ) console.log( `Iterating...` );
    return `For finished: ${ times } iterations`;
};

export function Memorize() {
    const { counter, increment } = useCounter( 5_000, -5_000, 1_000_000 );
    const [ show, setShow ] = useState( false );

    const iterationMessage = useMemo( () => iterate( counter ), [ counter ] );

    const handleOnClick = ( { target } ) => {
        setShow( !show );
        target.value = `Show/Hide ${ JSON.stringify( show ) }`;
    };

    return (
        <React.Fragment>
            <h1>Counter: { counter }</h1>
            <h4>{ iterationMessage }</h4>
            <input type="button" value="+1" onClick={ () => increment() } />
            <input type="button" value={ `Show/Hide ${ JSON.stringify( show ) }` } onClick={ handleOnClick } />
        </React.Fragment>
    );
};
