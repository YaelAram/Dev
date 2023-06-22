import React from 'react';

export const Child = React.memo(
    ( { number, increment } ) => {
        console.log( 'Rerendering... :(' );
        return (
            <input type="button" value={ number } onClick={ () => increment( number ) } />
        );
    }
);
