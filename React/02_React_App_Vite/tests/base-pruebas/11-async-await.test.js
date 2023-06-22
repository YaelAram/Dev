import { getBook, getBookError } from '../../src/base-pruebas/11-async-await';

describe( '11 Section', () => {
    test( 'getBook', async () => {
        const title = await getBook();
        expect( typeof title ).toBe( 'string' );
    } );

    test( 'getBookError', async () => {
        const title = await getBookError();
        expect( title ).toBeUndefined();
    } );
} );
