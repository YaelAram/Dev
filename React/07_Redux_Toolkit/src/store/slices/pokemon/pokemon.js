import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 0,
    pokemon: [],
    isLoading: false
};

export const pokemonSlice = createSlice( {
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemon: ( state ) => {
            state.isLoading = true;
        },
        setPokemon: ( state, action ) => {
            state.isLoading = false;
            state.pokemon = action.payload.pokemon;
            state.page = action.payload.page;
        }
    }
} );

export const { startLoadingPokemon, setPokemon } = pokemonSlice.actions;
