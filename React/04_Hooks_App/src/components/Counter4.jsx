import React, { useState, useCallback } from 'react';
import { IncrementButton } from './';

export function Counter4() {
    const [ counter, setCounter ] = useState( 0 );
    const increment = useCallback( ( value ) => { setCounter( ( prevCounter ) => prevCounter + value ); }, [] );
    // const increment = () => setCounter( counter + 1 );

    return (
        <React.Fragment>
            <h1>Counter: { counter }</h1>
            <IncrementButton increment={ increment } />
        </React.Fragment>
    );
};
