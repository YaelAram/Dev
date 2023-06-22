import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchHeroByName } from '../../../src/heroes/pages/SearchHeroByName';

const mockedUseNavigate = jest.fn();

jest.mock( 'react-router-dom', () => ( {
    ...jest.requireActual( 'react-router-dom' ),
    useNavigate: () => mockedUseNavigate
} ) );

describe( 'SearchHeroByName component', () => {

    beforeAll( () => jest.clearAllMocks() );

    test( 'Should show the default page (no query params)', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchHeroByName />
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();
    } );

    test( 'Should show batman in the input text', () => {
        const { container } = render(
            <MemoryRouter initialEntries={ [ '/heroes/search?q=batman' ] }>
                <SearchHeroByName />
            </MemoryRouter>
        );

        expect( screen.getByRole( 'textbox' ).value ).toBe( 'batman' );
        expect( screen.getByRole( 'img' ).src ).toContain( 'batman' );
    } );

    test( 'Should show batman as a query parameter', () => {
        const { container } = render(
            <MemoryRouter initialEntries={ [ '/heroes/search' ] }>
                <SearchHeroByName />
            </MemoryRouter>
        );

        fireEvent.change( screen.getByRole( 'textbox' ), { target: { value: 'batman' } } );
        fireEvent.submit( screen.getByRole( 'form' ) );

        expect( mockedUseNavigate ).toBeCalled();
        expect( mockedUseNavigate ).toBeCalledTimes( 1 );
        expect( mockedUseNavigate ).toBeCalledWith( '?q=batman' );
    } );
} );
