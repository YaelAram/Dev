import React from 'react';
import { ToDoList, InputToDo } from './';
import { useToDo } from '../hooks';

export function ToDoApp() {
    const { todos, handleNewToDo, handleRemoveToDo, handleToggleToDo } = useToDo();

    return (
        <section>
            <h1>ToDo App</h1>
            <InputToDo handleNewToDo={ handleNewToDo }/>
            <ToDoList todos={ todos } handleRemoveToDo={ handleRemoveToDo } handleToggleToDo={ handleToggleToDo }/>
        </section>
    );
};
