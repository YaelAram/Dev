import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../src/auth/context/AuthContext';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe( 'PrivateRoute component', () => {
    test( 'Should show children elements', () => {
        render(
            <AuthContext.Provider value={ { state: { logged: true } } }>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Logged</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText( 'Logged' ) ).toBeTruthy();
    } );
} );