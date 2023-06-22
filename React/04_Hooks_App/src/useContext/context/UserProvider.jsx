import React, { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ( { children } ) => {
    const [ user, setUser ] = useState();
    const updateUser = ( user ) => setUser( user );

    return (
        <UserContext.Provider value={ { user, updateUser } }>
            { children }
        </UserContext.Provider>
    );
};
