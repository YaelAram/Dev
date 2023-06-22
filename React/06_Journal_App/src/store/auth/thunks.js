import { signInWithGoogle, customSignIn, customLogIn, logOutFirebase } from '../../firebase/providers';
import { checkCredentials, login, logout } from './';

export const checkAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( checkCredentials() );
    };
};

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkCredentials() );
        const result = await signInWithGoogle();
        if( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ) );
    };
};

export const startCustomSignIn = ( { displayName, email, password } ) => {
    return async ( dispatch ) => {
        dispatch( checkCredentials() );
        const result = await customSignIn( { displayName, email, password } );
        if( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ) );
    };
};

export const startCustomLogin = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( checkCredentials() );
        const result = await customLogIn( email, password );
        if( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ) );
    };
};

export const startLogOut = () => {
    return async ( dispatch ) => {
        await logOutFirebase();
        dispatch( logout( { message: undefined } ) );
    };
};
