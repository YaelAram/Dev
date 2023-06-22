import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/context/AuthContext';
import { AppRouter } from '../../../src/router/AppRouter';

const mockedUseNavigate = jest.fn();

jest.mock( 'react-router-dom', () => ( {
    ...jest.requireActual( 'react-router-dom' ),
    useNavigate: () => mockedUseNavigate
} ) );

describe( 'NavBar component', () => {
    const initialState = { state: { logged: true, name: 'Yael' }, logout: jest.fn() };

    beforeEach( () => jest.clearAllMocks() );

    test( 'Should show a page with UserName in the navbar', () => {
        render( 
            <AuthContext.Provider value={ initialState }>
                <MemoryRouter initialEntries={ [ '/heroes/marvel' ] }>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText( `Logout ${ initialState.state.name }` ) ).toBeTruthy();
    } );

    test( 'Should call logout function', () => {
        render( 
            <AuthContext.Provider value={ initialState }>
                <MemoryRouter initialEntries={ [ '/heroes/marvel' ] }>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        fireEvent.click( screen.getByText( `Logout ${ initialState.state.name }` ) );

        expect( initialState.logout ).toBeCalled();
        expect( initialState.logout ).toBeCalledTimes( 1 );
        expect( initialState.logout ).toBeCalledWith();
    } );

    test( 'Should call navigate function', () => {
        render( 
            <AuthContext.Provider value={ initialState }>
                <MemoryRouter initialEntries={ [ '/heroes/marvel' ] }>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        fireEvent.click( screen.getByText( `Logout ${ initialState.state.name }` ) );

        expect( mockedUseNavigate ).toBeCalled();
        expect( mockedUseNavigate ).toBeCalledTimes( 1 );
        expect( mockedUseNavigate ).toBeCalledWith( '/', { replace: true } );
    } );
} );