import React from 'react';

export function Quote( { author, quote } ) {
    return (
        <blockquote style={ { display: 'flex' } }>
            <p>{ quote }</p>
            <p>{ author }</p>
        </blockquote>
    );
};
