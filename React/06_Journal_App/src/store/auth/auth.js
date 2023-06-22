import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'checking', // not-authenticated or authenticated or checking
    uid: null,
    name: null,
    email: null,
    photoURL: null,
    error: null
};

export const authSlice = createSlice( {
    name: 'auth',
    initialState,
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.uid = payload?.uid;
            state.name = payload?.displayName;
            state.email = payload?.email;
            state.photoURL = payload?.photoURL;
            state.error = null;
        },
        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.name = null;
            state.email = null;
            state.photoURL = null;
            state.error = payload.message;
        },
        checkCredentials: ( state ) => {
            state.status = 'checking'
        }
    }
} );

export const { login, logout, checkCredentials } = authSlice.actions;
