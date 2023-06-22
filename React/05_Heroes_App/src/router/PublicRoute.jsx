import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../auth/context/AuthContext';

export function PublicRoute( { children } ) {
    const { state } = useContext( AuthContext );
    return ( !state.logged ) ? children : <Navigate to="/heroes/" /> ;
};
