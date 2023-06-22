import { render, screen } from '@testing-library/react'
import { Home } from '../../../src/useContext/components/Home';
import { UserContext } from '../../../src/useContext/context/UserContext';

describe( 'Empty Home component', () => {
    test( 'Should be empty', () => {
        render(  
            <UserContext.Provider value={ { user: null } }>
                <Home />
            </UserContext.Provider>
        );

        expect( screen.getByLabelText( 'pre' ).innerHTML ).toBe( 'null' );
    } );

    test( 'Should show the user', () => {
        const user = { id: 1, name: 'Yael' };
        render(  
            <UserContext.Provider value={ { user } }>
                <Home />
            </UserContext.Provider>
        );

        expect( screen.getByLabelText( 'pre' ).innerHTML ).toBe( JSON.stringify( user, null, 4 ) );
    } );
} );
