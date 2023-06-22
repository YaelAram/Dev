import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';

import Counter from '../../src/components/Counter';

describe( 'Counter Component', () => {
    const value = 0;

    test( 'Counter snapshot', () => {
        const { container } =  render( <Counter value={ value }/> );
        expect( container ).toMatchSnapshot();
    } );

    test( 'Check value is on H2', () => {
        render( <Counter value={ value }/> );
        expect( screen.getByRole( 'heading', { level: 2 } ).innerHTML ).toContain( String( value ) );
    } );

    test( 'Increment button', () => {
        render( <Counter value={ value }/> );
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-add' } ) );
        expect( screen.getByRole( 'heading', { level: 2 } ).innerHTML ).toContain( '1' );
    } );

    test( 'Decrement button', () => {
        render( <Counter value={ value }/> );
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-substract' } ) );
        expect( screen.getByRole( 'heading', { level: 2 } ).innerHTML ).toContain( '-1' );
    } );

    test( 'Reset button', () => {
        render( <Counter value={ value }/> );
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-substract' } ) );
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-substract' } ) );
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-substract' } ) );
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-add' } ) );
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-reset' } ) );
        expect( screen.getByRole( 'heading', { level: 2 } ).innerHTML ).toContain( String( value ) );
    } );
} );
