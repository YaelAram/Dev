import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, startLoadingNotes } from '../store';

export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect( () => {
        onAuthStateChanged( FirebaseAuth, async ( user ) => {
            if( !user ) return dispatch( logout( { message: undefined } ) );
            const { uid, displayName, email, photoURL } = user;
            dispatch( login( { uid, displayName, email, photoURL } ) );
            dispatch( startLoadingNotes() );
        } );
    }, [] );

    return {
        status
    };
};
