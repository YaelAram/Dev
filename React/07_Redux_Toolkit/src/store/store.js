import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './api/todosApi';
import { counterSlice } from './slices/counter/counter';
import { pokemonSlice } from './slices/pokemon/pokemon';

export const store = configureStore( {
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer,
        [ todosApi.reducerPath ]: todosApi.reducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( todosApi.middleware )
} );
