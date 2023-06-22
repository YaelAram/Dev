import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export function Login() {
    const navigate = useNavigate();
    const { login } = useContext( AuthContext )

    const handleLogin = () => {
        login( 'Yael' );
        navigate( '/heroes/marvel', { replace: true } );
    };

    return (
        <React.Fragment>
            <h1>Login Page</h1>
            <input type="button" value="Login" onClick={ handleLogin } />
        </React.Fragment>
    );
};
