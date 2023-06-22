import React from 'react';

export const CounterLabel = React.memo(
    ( { value } ) => {
        console.log( 'Rerendering CounterLabel component' );
        return (
            <span>{ value }</span>
        );
    }
);
