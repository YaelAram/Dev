import { getUser, getActiveUser } from '../../src/base-pruebas/05-funciones';

describe( '05 Section', () => {
    test( 'getUser function', () => {
        const user = getUser();
        const userCompare = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        expect( user ).toStrictEqual( userCompare );
    } );

    test( 'getActiveUser function', () => {
        const user = getActiveUser( 'Yael' );
        const userCompare = {
            uid: 'ABC567',
            username: 'Yael'
        };
        expect( user ).toStrictEqual( userCompare );
    } );
} );
