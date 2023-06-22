import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe( '09 Section', () => {
    test( 'getHeroeByIdAsync', ( done ) => {
        const id = 1;
        const heroCompare = { id: 1, name: 'Batman', owner: 'DC' };
        getHeroeByIdAsync( id )
            .then( ( hero ) => {
                expect( hero ).toStrictEqual( heroCompare);
                done();
            } );
    } );

    test( 'getHeroeByIdAsync: Invalid ID', ( done ) => {
        const id = 100;
        const heroCompare = { id: 1, name: 'Batman', owner: 'DC' };
        getHeroeByIdAsync( id )
            .catch( ( hero ) => {
                expect( hero ).toBe( 'No se pudo encontrar el héroe' );
                done();
            } );
    } );
} );
