import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../src/auth/context/AuthContext';
import { PublicRoute } from '../../src/router/PublicRoute';

describe( 'PublicRoute component', () => {
    test( 'Should show children components', () => {
        render(
            <AuthContext.Provider value={ { state: { logged: false } } }>
                <PublicRoute>
                    <h1>Not logged</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText( 'Not logged' ) ).toBeTruthy();
    } );

    test( 'Should navigate to /heroes/marvel', () => {
        render(
            <AuthContext.Provider value={ { state: { logged: true, name: 'Yael' } } }>
                <MemoryRouter initialEntries={ [ '/' ] }>
                    <Routes>
                        <Route path='/' element={ 
                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        } />
                        <Route path='/heroes/' element={ <h1>Marvel</h1> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText( 'Marvel' ) ).toBeTruthy();
        
    } );
} );
