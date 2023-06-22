import { renderHook, act } from '@testing-library/react';

import { useCounter } from '../../src/hooks/useCounter';

describe( 'useCounter Custom Hook', () => {
    test( 'Check initial values', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, reset, increment } = result.current;

        expect( counter ).toBe( 0 );
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
    } );

    test( 'Counter should be 10', () => {
        const { result } = renderHook( () => useCounter( 10 ) );
        const { counter } = result.current;

        expect( counter ).toBe( 10 );
    } );

    test( 'Increment function', () => {
        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;
        act( () => {
            increment();
            increment( 5 );
        } );

        expect( result.current.counter ).toBe( 6 );
    } );

    test( 'Decrement function', () => {
        const { result } = renderHook( () => useCounter() );
        const { decrement } = result.current;
        act( () => {
            decrement();
            decrement( 5 );
        } );

        expect( result.current.counter ).toBe( -6 );
    } );

    test( 'Reset function', () => {
        const { result } = renderHook( () => useCounter() );
        const { increment, decrement, reset } = result.current;
        act( () => {
            increment();
            increment( 5 );
            decrement( 3 );
            reset();
        } );

        expect( result.current.counter ).toBe( 0 );
    } );
} );
