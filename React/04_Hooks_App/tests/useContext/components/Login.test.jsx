import { fireEvent, render, screen } from '@testing-library/react';
import { Login } from '../../../src/useContext/components/Login';
import { UserContext } from '../../../src/useContext/context/UserContext';

describe( 'Login component', () => {
    const updateUserMock = jest.fn();

    test( 'Should be empty', () => {
        render(  
            <UserContext.Provider value={ { user: null } }>
                <Login />
            </UserContext.Provider>
        );

        expect( screen.getByLabelText( 'pre' ).innerHTML ).toBe( 'null' );
    } );

    test( 'Should run updateUser function', () => {
        const updatedUser = {
            id: 123456,
            name: 'Yael Castillo',
            email: 'yaelaram14@gmail.com'
        };
        render(  
            <UserContext.Provider value={ { user: null, updateUser: updateUserMock } }>
                <Login />
            </UserContext.Provider>
        );
        fireEvent.click( screen.getByRole( 'button' ) );

        expect( updateUserMock ).toBeCalled();
        expect( updateUserMock ).toBeCalledTimes( 1 );
        expect( updateUserMock ).toBeCalledWith( updatedUser );
    } );
} );