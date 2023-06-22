import { startLoadingPokemon, setPokemon } from './pokemon';

export const getPokemon = ( page = 0 ) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemon() );
        const res = await fetch( `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ 10 * page }` );
        const pokemon = ( await res.json() ).results.map( ( { name } ) => name );
        dispatch( setPokemon( { pokemon, page } ) );
    }
};
