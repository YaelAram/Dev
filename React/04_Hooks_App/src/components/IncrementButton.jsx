import React from 'react';

export const IncrementButton = React.memo(
    ( { increment } ) => {
        console.log( 'Rerendering...' );
        return (
            <input type="button" value="+5" onClick={ () => increment( 5 ) } />
        );
    }
);
