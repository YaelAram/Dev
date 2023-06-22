import React from 'react';

export const ToDoItem = React.memo(
    ( { id, title, done, handleRemoveToDo, handleToggleToDo } ) => {
        const handleClickRemove = () => handleRemoveToDo( id );
        const handleCheckBoxToggle = () => handleToggleToDo( id );

        return (
            <li>
                <input type="checkbox" checked={ done } onChange={ handleCheckBoxToggle }/>
                <span className={ ( done ) ? "doneToDo" : "" } data-testid="title-to-do">{ title }</span>
                <input type="button" value="Remove" onClick={ handleClickRemove }/>
            </li>
        );
    }
);
