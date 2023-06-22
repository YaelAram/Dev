import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/useContext/MainApp';

describe( 'MainApp component', () => {
    test( 'Shoul show Home component', () => {
        render( 
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toBe( 'Home Page' );
    } );

    test( 'Shoul show Login component', () => {
        render( 
            <MemoryRouter initialEntries={ [ '/login' ] }>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toBe( 'Login Page' );
    } );
} );
