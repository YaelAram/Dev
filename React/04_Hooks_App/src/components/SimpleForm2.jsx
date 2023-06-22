import React from 'react';
import { useForm } from '../hooks/useForm';

export function SimpleForm2() {
    const { name, email, password, form, handleChange, handleReset } = useForm( {
        name: '',
        email: '',
        password: ''
    } );

    return (
        <React.Fragment>
            <form>
                <h1>Simple Form 2</h1>
                <input type="text" name="name" value={ name } onChange={ handleChange } />
                <input type="email" name="email" value={ email } onChange={ handleChange } />
                <input type="password" name="password" value={ password } onChange={ handleChange } />
                <input type="button" value="Reset" onClick={ handleReset } />
            </form>
            <h4>{ JSON.stringify( form ) }</h4>
        </React.Fragment>
    );
};
