import getGreeting from '../../src/base-pruebas/02-template-string';

describe( 'Section 2', () => { 
    test( 'Get Greeting function', () => { 
        const message1 = getGreeting( 'Yael' );
        expect( message1 ).toBe( 'Hello Yael' );
    } );
} );
