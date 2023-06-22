import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe( 'useForm hook', () => {
    const initialForm = {
        name: 'Yael',
        email: 'yaelaram14@gmail.com'
    };

    test( 'Check initial state', () => {
        const { result } = renderHook( () => useForm( initialForm ) );

        expect( result.current ).toEqual( {
            name: initialForm.name,
            email: initialForm.email,
            form: initialForm,
            handleChange: expect.any( Function ),
            handleReset: expect.any( Function )
        } )
    } );

    test( 'Check handleChange updates name field', () => {
        const newName = 'Yael Castillo';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { handleChange } = result.current;
        act( () => {
            handleChange( { target: { name: 'name', value: newName } } );
        } );

        expect( result.current.name ).toBe( newName );
    } );

    test( 'Check handleReset re initilize the form object', () => {
        const newName = 'Yael Castillo';
        const newEmail = 'yaelaram14@outlook.com';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { handleChange, handleReset } = result.current;
        act( () => {
            handleChange( { target: { name: 'name', value: newName } } );
            handleChange( { target: { name: 'email', value: newEmail } } );
            handleReset();
        } );

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.email ).toBe( initialForm.email );
    } );
} );
