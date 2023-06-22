import { screen, render, fireEvent } from '@testing-library/react';
import { SearchBar } from '../../src/components/SearchBar';

describe( 'SearchBar component', () => {
    test( 'should return a non empty string', () => {
        render( <SearchBar onAddTopic={ () => {} } /> );
        const input = screen.getByRole( 'textbox' );
        fireEvent.input( input, { target: { value: 'rammstein' } } );
        expect( input.value ).toBe( 'rammstein' );
    } );

    test( 'should return a non empty string, onSubmit event', () => {
        const onAddTopic = jest.fn();
        const inputValue = '  rammstein     ';
        render( <SearchBar onAddTopic={ onAddTopic } /> );
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( onAddTopic ).toHaveBeenCalled();
        expect( onAddTopic ).toHaveBeenCalledTimes( 1 );
        expect( onAddTopic ).toBeCalledWith( inputValue.trim().toUpperCase() );

        expect( input.value ).toBe( '' );
    } );

    test( 'should not do anything, input value not allowed', () => {
        const onAddTopic = jest.fn();
        const inputValue = '     ';
        render( <SearchBar onAddTopic={ onAddTopic } /> );
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( onAddTopic ).not.toBeCalled();
    } );
} );
