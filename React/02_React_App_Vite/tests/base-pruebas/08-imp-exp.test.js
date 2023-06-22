import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe( '08 Section', () => {
    test( 'getHeroeById', () => {
        const { id, name, owner } = getHeroeById( 1 );
        expect( id ).toBe( 1 );
        expect( name ).toBe( 'Batman' );
        expect( owner ).toBe( 'DC' );
    } );

    test( 'getHeroeById: ID not founded', () => {
        const hero = getHeroeById( 24 );
        expect( hero ).toBeUndefined();
    } );

    test( 'getHeroesByOwner: DC', () => {
        const heroes = getHeroesByOwner( 'DC' );
        const heroesCompare = [ 
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ];
        expect( heroes.length ).toBe( heroesCompare.length );
        expect( heroes ).toStrictEqual( heroesCompare );
    } );

    test( 'getHeroesByOwner: Marvel', () => {
        const heroes = getHeroesByOwner( 'Marvel' );
        const heroesCompare = [ 
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ];
        expect( heroes.length ).toBe( heroesCompare.length );
        expect( heroes ).toStrictEqual( heroesCompare );
    } );
} );
