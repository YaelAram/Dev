import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export function Login() {
    const { user, updateUser } = useContext( UserContext );

    const handleLogIn = () => {
        updateUser( {
            id: 123456,
            name: 'Yael Castillo',
            email: 'yaelaram14@gmail.com'
        } );
    };

    return (
        <React.Fragment>
            <h1>Login Page</h1>
            <hr />
            <pre aria-label="pre">
                { JSON.stringify( user, null, 4 ) }
            </pre>
            <input type="button" value="LogIn" onClick={ handleLogIn } />
        </React.Fragment>
    );
};
