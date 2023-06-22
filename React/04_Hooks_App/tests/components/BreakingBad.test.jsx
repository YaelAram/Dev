import { fireEvent, render, screen } from '@testing-library/react';
import { BreakingBad } from '../../src/components';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock( '../../src/hooks/useFetch' );
jest.mock( '../../src/hooks/useCounter' );

describe( 'BreakingBad component', () => {
    const decrement = jest.fn();
    const reset = jest.fn();
    const increment = jest.fn();
    useCounter.mockReturnValue( {
        counter: 1,
        decrement,
        reset,
        increment
    } );

    beforeEach( () => jest.clearAllMocks() );

    test( 'Check default values', () => {
        useFetch.mockReturnValue( {
            info: null,
            isLoading: true
        } );
        render( <BreakingBad /> );
        const prevQuoteButton = screen.getByRole( 'button', { name: 'Previous Quote' } );
        const firstQuoteButton = screen.getByRole( 'button', { name: 'Go to first quote' } );
        const nextQuoteButton = screen.getByRole( 'button', { name: 'Next Quote' } );

        expect( screen.getByRole( 'heading', { level: 3 } ).innerHTML ).toBe( 'Loading...' );
        expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toBe( 'Breaking Bad Quote #1' );
        expect( prevQuoteButton.disabled ).toBeTruthy();
        expect( firstQuoteButton.disabled ).toBeTruthy();
        expect( nextQuoteButton.disabled ).toBeTruthy();
    } );

    test( 'Should show a quote', () => {
        useFetch.mockReturnValue( {
            info: [ { author: 'No name', quote: 'No quote' } ],
            isLoading: false
        } );
        render( <BreakingBad /> );
        const prevQuoteButton = screen.getByRole( 'button', { name: 'Previous Quote' } );
        const firstQuoteButton = screen.getByRole( 'button', { name: 'Go to first quote' } );
        const nextQuoteButton = screen.getByRole( 'button', { name: 'Next Quote' } );
        
        expect( screen.getByText( 'No name' ) ).toBeTruthy();
        expect( screen.getByText( 'No quote' ) ).toBeTruthy();
        expect( prevQuoteButton.disabled ).toBeFalsy();
        expect( firstQuoteButton.disabled ).toBeFalsy();
        expect( nextQuoteButton.disabled ).toBeFalsy();
    } );

    test( 'Should call decrement', () => {
        useFetch.mockReturnValue( {
            info: [ { author: 'No name', quote: 'No quote' } ],
            isLoading: false
        } );
        render( <BreakingBad /> );
        const prevQuoteButton = screen.getByRole( 'button', { name: 'Previous Quote' } );
        fireEvent.click( prevQuoteButton );

        expect( decrement ).toBeCalled();
        expect( decrement ).toBeCalledTimes( 1 );
    } );

    test( 'Should call reset', () => {
        useFetch.mockReturnValue( {
            info: [ { author: 'No name', quote: 'No quote' } ],
            isLoading: false
        } );
        render( <BreakingBad /> );
        const firstQuoteButton = screen.getByRole( 'button', { name: 'Go to first quote' } );
        fireEvent.click( firstQuoteButton );

        expect( reset ).toBeCalled();
        expect( reset ).toBeCalledTimes( 1 );
    } );

    test( 'Should call increment', () => {
        useFetch.mockReturnValue( {
            info: [ { author: 'No name', quote: 'No quote' } ],
            isLoading: false
        } );
        render( <BreakingBad /> );
        const nextQuoteButton = screen.getByRole( 'button', { name: 'Next Quote' } );
        fireEvent.click( nextQuoteButton );

        expect( increment ).toBeCalled();
        expect( increment ).toBeCalledTimes( 1 );
    } );
} );
