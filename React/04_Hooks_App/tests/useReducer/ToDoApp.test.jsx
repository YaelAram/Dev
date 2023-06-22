import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ToDoApp } from '../../src/useReducer';
import { useToDo } from '../../src/hooks/useToDo';

jest.mock( '../../src/hooks/useToDo' );

describe( 'ToDoApp component', () => {
    const handleNewToDoMock = jest.fn();
    const handleRemoveToDoMock = jest.fn();
    const handleToggleToDoMock = jest.fn();
    useToDo.mockReturnValue( {
        todos: [
            { id: 1, title: 'Hello World', done: false },
            { id: 2, title: 'Goodbye World', done: true }
        ],
        handleNewToDo: handleNewToDoMock,
        handleRemoveToDo: handleRemoveToDoMock,
        handleToggleToDo: handleToggleToDoMock
    } );

    test( 'Check initial state', () => {
        render( <ToDoApp /> );

        expect( screen.getAllByRole( 'listitem' ).length ).toBe( 2 );
    } );

    test( 'Create new ToDo item', async () => {
        const inputValue = 'Hi World';
        render( <ToDoApp /> );
        fireEvent.input( screen.getByRole( 'textbox' ), { target: { value: inputValue } } );
        fireEvent.submit( screen.getByRole( 'form' ) );

        expect( handleNewToDoMock ).toBeCalled();
        expect( handleNewToDoMock ).toBeCalledTimes( 1 );
        expect( handleNewToDoMock ).toBeCalledWith( inputValue );
    } );
} );