import React from 'react';
import { useCounter, useFetch } from '../hooks';
import { Quote, LoadingAlert } from './'

export function BreakingBad() {
    const { counter, decrement, reset, increment } = useCounter( 1, 1, 20 );
    const { info, isLoading } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }`, undefined );
    const { author, quote } = ( info ) ? info[ 0 ] : { author: 'No name', quote: 'No quote' };
    return (
        <React.Fragment>
            <h1>Breaking Bad Quote #{ counter }</h1>
            <hr />
            {
                ( isLoading ) ? <LoadingAlert /> :<Quote author={ author } quote={ quote }/>
            }
            <input type="button" value="Previous Quote" disabled={ isLoading } onClick={ () => decrement() } />
            <input type="button" value="Go to first quote" disabled={ isLoading } onClick={ () => reset() } />
            <input type="button" value="Next Quote" disabled={ isLoading } onClick={ () => increment() } />
        </React.Fragment>
    );
};
