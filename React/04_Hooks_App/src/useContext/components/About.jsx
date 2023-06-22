import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export function About() {
    const { user } = useContext( UserContext );

    return (
        <React.Fragment>
            <h1>About Page</h1>
            <hr />
            <pre>
                { JSON.stringify( user, null, 4 ) }
            </pre>
        </React.Fragment>
    );
};
