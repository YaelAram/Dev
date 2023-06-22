import React, { useState } from 'react';
import { useGetTodosQuery, useGetTodoQuery } from './store/api/todosApi';

export function ToDoApp() {
    const [ counter, setCounter ] = useState( 1 );

    const { data: todos, isLoading } = useGetTodosQuery();
    const { data: todo, isLoading: isLoadingTodo } = useGetTodoQuery( counter );

    return (
        <React.Fragment>
            <h1>To Do - RTK Query</h1>
            {
                ( isLoadingTodo ) ? undefined :
                ( <h2>{ `${ todo.id }. ${ todo.title }` }</h2> )
            }
            <input type="button" value="Previous" onClick={ () => setCounter( counter - 1 ) } />
            <input type="button" value="Next" onClick={ () => setCounter( counter + 1 ) } />
            <h4>Loading: { isLoading ? 'True' : 'False' }</h4>
            {
                ( isLoading ) ? undefined : 
                ( <ul>
                    {
                        todos.map( ( { id, title, completed } ) => (
                            <li key={ id } className={ completed ? 'done' : undefined }>{ title }</li>
                        ) )
                    }
                </ul> )
            }
        </React.Fragment>
    )
};
