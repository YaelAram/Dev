import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export function Home() {
    const { user } = useContext( UserContext );

    return (
        <React.Fragment>
            <h1>Home Page</h1>
            <hr />
            <pre aria-label="pre">
                { JSON.stringify( user, null, 4 ) }
            </pre>
        </React.Fragment>
    );
};
