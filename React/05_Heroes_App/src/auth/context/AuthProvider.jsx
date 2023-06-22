import React, { useReducer } from 'react';

import { AuthContext } from './AuthContext';
import { authReducer } from '../authReducer';
import { types } from '../types/types';

const USER_KEY = 'user';

const init = () => {
    const name = localStorage.getItem( USER_KEY );
    return { logged: !!name, name };
};

export function AuthProvider( { children } ){
    const [ state, dispatch ] = useReducer( authReducer, {}, init );

    const login = async ( name = '' ) => {
        dispatch( { type: types.login, payload: name } );
        localStorage.setItem( USER_KEY, name );
    };

    const logout = async () => {
        dispatch( { type: types.logout } );
        localStorage.removeItem( USER_KEY );
    };

    return (
        <AuthContext.Provider value={ {
            state,
            login,
            logout
        } }>
            { children }
        </AuthContext.Provider>
    );
};
