import { renderHook, waitFor } from '@testing-library/react';

import { useFetch } from '../../src/hooks/useFetch';

describe( 'useFetch custom hook', () => {
    test( 'should return an empty array', () => {
        const { result } = renderHook( () => useFetch( 'rammstein' ) );
        const { current } = result;
        expect( current.length ).toBe( 0 );
    } );

    test( 'should return an array of objects (id, title, url)', async () => {
        const { result } = renderHook( () => useFetch( 'rammstein' ) );
        await waitFor( () => expect( result.current.length ).toBeGreaterThan( 0 ) )
        const { current } = result;
        expect( current.length ).toBeGreaterThan( 0 );
    } );
} );
