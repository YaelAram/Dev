import React, { useRef, useState, useEffect } from 'react';
import { Message } from './Message';

export function SimpleForm() {
    const [ formInfo, setFormInfo ] = useState( {
        name: '',
        email: ''
    } );
    const userName = useRef();
    const email = useRef();

    const handleSubmit = ( evt ) => {
        console.log( 'useState called' );
        evt.preventDefault();
        const data = {
            name: userName.current.value,
            email: email.current.value
        };
        userName.current.classList.add( 'black' );
        email.current.classList.add( 'black' );
        setFormInfo( data );
    };

    useEffect( () => {
        console.log( 'useEffect called' );
        userName.current.value = '';
        email.current.value = '';
    }, [ formInfo ] );

    return (
        <React.Fragment>
            <form onSubmit={ handleSubmit }>
                <h1>Simple Form</h1>
                <input type="text" name="username" ref={ userName } />
                <br />
                <input type="email" name="email" ref={ email } />
                <input type="submit" value="Send" />
            </form>
            <h3>{ `${ formInfo.name} - ${ formInfo.email }` }</h3>
            { formInfo.name === 'yael' && <Message /> }
        </React.Fragment>
    );
};
