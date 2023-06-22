import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../src/auth/context/AuthContext';
import { AppRouter } from '../../src/router/AppRouter';

describe( 'AppRouter component', () => {
    test( 'Should show login page', () => {
        render( 
            <AuthContext.Provider value={ { state: { logged: false } } }>
                <MemoryRouter initialEntries={ [ '/heroes/marvel' ] }>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText( 'Login Page' ) ).toBeTruthy();
    } );

    test( 'Should show a page with UserName in the navbar', () => {
        render( 
            <AuthContext.Provider value={ { state: { logged: true, name: 'Yael' } } }>
                <MemoryRouter initialEntries={ [ '/heroes/marvel' ] }>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText( 'Logout Yael' ) ).toBeTruthy();
    } );
} );
