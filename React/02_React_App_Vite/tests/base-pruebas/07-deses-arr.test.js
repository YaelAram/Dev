import { returnArray } from '../../src/base-pruebas/07-deses-arr';

describe( '07 Section', () => {
    test( 'returnArray function', () => {
        const [ letters, numbers ] = returnArray();
        expect( typeof letters ).toBe( 'string' );
        expect( letters ).toBe( 'ABC' );
        expect( typeof numbers ).toBe( 'number' );
        expect( numbers ).toBe( 123 );
    } );
} );
