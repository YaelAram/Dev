import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/slices/counter/counter';
import { getPokemon } from './store/slices/pokemon/thunks';

export function App() {
    const { value } = useSelector( state => state.counter );
    const { page, pokemon, isLoading } = useSelector( state => state.pokemon );
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( getPokemon( value ) );
    }, [ value ] );

    return (
        <React.Fragment>
            <h2>Counter: { value }</h2>
            <input type="button" value="Increment" onClick={ () => dispatch( increment() ) } />
            <input type="button" value="Decrement" onClick={ () => dispatch( decrement() ) } />
            <input type="button" value="Increment 2" onClick={ () => dispatch( incrementByAmount( 2 ) ) } />
            <hr />
            <h2>Pokemon</h2>
            <p>Loading Page { page }: { isLoading ? 'True' : 'False' }</p>
            <ul>
                {
                    pokemon.map( ( item ) => <li key={ item }>{ item }</li> )
                }
            </ul>
            <input type="button" value="Previous Page" disabled={ isLoading } onClick={ () => dispatch( decrement() ) } />
            <input type="button" value="Next Page" disabled={ isLoading } onClick={ () => dispatch( increment() ) } />
        </React.Fragment>
    );
};
