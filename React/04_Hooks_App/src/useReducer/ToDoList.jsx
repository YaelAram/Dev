import React from 'react';
import { ToDoItem } from './ToDoItem';

export const ToDoList = React.memo(
    ( { todos = [], handleRemoveToDo, handleToggleToDo } ) => {
        return (
            <ul>
                { 
                    todos.map( 
                        ( todo ) => 
                            <ToDoItem 
                                key={ todo.id }
                                { ...todo }
                                handleRemoveToDo={ handleRemoveToDo }
                                handleToggleToDo={ handleToggleToDo }
                            /> 
                    ) 
                }
            </ul>
        );
    }
);
