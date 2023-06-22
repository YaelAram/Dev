import { fireEvent, render, screen } from '@testing-library/react';
import { ToDoItem } from "../../src/useReducer/ToDoItem";

describe( 'ToDoItem component', () => {
    const handleRemoveToDoMock = jest.fn();
    const handleToggleToDoMock = jest.fn();
    const toDoItem = {
        id: 1,
        title: 'Hello World',
        done: false
    };

    beforeEach( () => jest.clearAllMocks() );

    test( 'Match snapshot', () => {
        const { container } = render( 
            <ToDoItem 
                { ...toDoItem }
                handleRemoveToDo={ handleRemoveToDoMock }
                handleToggleToDo={ handleToggleToDoMock }
            /> 
        );
        expect( container ).toMatchSnapshot();
    } );

    test( 'Checkbox not selected and css class doneToDo not included', () => {
        render( 
            <ToDoItem 
                { ...toDoItem }
                handleRemoveToDo={ handleRemoveToDoMock }
                handleToggleToDo={ handleToggleToDoMock }
            /> 
        );

        expect( screen.getByTestId( 'title-to-do' ).className ).toBe( '' );
        expect( screen.getByRole( 'checkbox' ).checked ).toBeFalsy();
    } );

    test( 'Checkbox selected and css class doneToDo included', () => {
        const toDoItemCompleted = { ...toDoItem, [ 'done' ]: true };
        render( 
            <ToDoItem 
                { ...toDoItemCompleted }
                handleRemoveToDo={ handleRemoveToDoMock }
                handleToggleToDo={ handleToggleToDoMock }
            /> 
        );

        expect( screen.getByTestId( 'title-to-do' ).className ).toBe( 'doneToDo' );
        expect( screen.getByRole( 'checkbox' ).checked ).toBeTruthy();
    } );

    test( 'ToDoItem should call handleRemoveToDo function', () => {
        render( 
            <ToDoItem 
                { ...toDoItem }
                handleRemoveToDo={ handleRemoveToDoMock }
                handleToggleToDo={ handleToggleToDoMock }
            /> 
        );
        fireEvent.click( screen.getByRole( 'button' ) );

        expect( handleRemoveToDoMock ).toBeCalled();
        expect( handleRemoveToDoMock ).toBeCalledTimes( 1 );
        expect( handleRemoveToDoMock ).toBeCalledWith( toDoItem.id );
    } );

    test( 'ToDoItem should call handleToggleToDo function', () => {
        render( 
            <ToDoItem 
                { ...toDoItem }
                handleRemoveToDo={ handleRemoveToDoMock }
                handleToggleToDo={ handleToggleToDoMock }
            /> 
        );
        fireEvent.click( screen.getByRole( 'checkbox' ) );

        expect( handleToggleToDoMock ).toHaveBeenCalled();
        expect( handleToggleToDoMock ).toBeCalledTimes( 1 );
        expect( handleToggleToDoMock ).toBeCalledWith( toDoItem.id );
    } );
} );