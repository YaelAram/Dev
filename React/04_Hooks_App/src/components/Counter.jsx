import React, { useState } from 'react';

export function Counter() {
    const [ state, setState ] = useState( {
        counter1: 10,
        counter2: 20,
        counter3: 30
    } );

    const { counter1, counter2, counter3 } = state;

    const handleOnClick = () => {
        setState( () => {
            const stateCopy = { ...state };
            for ( const key in stateCopy ) stateCopy[ key ] += 1;
            return stateCopy;
        } );
    };

    return (
        <React.Fragment>
            <h3>Counter 1: { counter1 }</h3>
            <h3>Counter 2: { counter2 }</h3>
            <h3>Counter 3: { counter3 }</h3>
            <input type="button" value="+1" onClick={ handleOnClick } />
        </React.Fragment>
    );
};
