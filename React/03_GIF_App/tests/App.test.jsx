import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { App } from '../src/App';

describe( 'App component', () => {
    test( 'Snapshot', () => {
        const { container } = render( <App /> );
        expect( container ).toMatchSnapshot();
    } );

    test( 'should show the new topic without images', () => {
        const inputValue = 'rammstein';
        render( <App /> );
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        expect( screen.getByRole( 'heading', { level: 2 } ).innerHTML ).toBe( inputValue.toUpperCase() );
    } );

    test( 'should show the new topic with images', async () => {
        const inputValue = 'rammstein';
        render( <App /> );
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        await waitFor( () => expect( screen.getAllByRole( 'img' ).length ).toBeGreaterThan( 0 ) );
        expect( screen.getAllByRole( 'img' ).length ).toBe( 6 );
    } );

    test( 'should delete TopicSection', async () => {
        const inputValue = 'rammstein';
        render( <App /> );
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        await waitFor( () => expect( screen.getAllByRole( 'img' ).length ).toBeGreaterThan( 0 ) );
        const button = screen.getByRole( 'button' );
        fireEvent.click( button );
        expect( screen.getAllByRole( 'heading' ).length ).toBe( 1 );
    } );
} );
