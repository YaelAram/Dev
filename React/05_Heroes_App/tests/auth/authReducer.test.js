import { authReducer } from '../../src/auth/authReducer';
import { types } from '../../src/auth/types/types';

describe( 'authReducer function', () => {
    const initialState = { logged: false, name: undefined };

    test( 'Should return an initial value', () => {
        const state = authReducer( initialState, {} );
        expect( state ).toEqual( initialState );
    } );

    test( 'Should return a logged user', () => {
        const userName = 'Yael';
        const state = authReducer( initialState, { type: types.login, payload: userName } );
        expect( state ).toEqual( { logged: true, name: userName } );
    } );

    test( 'Should return a logged out user', () => {
        const state = authReducer( { logged: true, name: 'Yael' }, { type: types.logout } );
        expect( state ).toEqual( initialState );
    } );
} );
