import { useReducer, useCallback, useEffect } from 'react';
import { toDoReducer } from '../useReducer/';

const TODOS_KEY = 'todo_list';
const init = () => JSON.parse( localStorage.getItem( TODOS_KEY ) ) ?? [];

export const useToDo = () => {
    const [ todos, dispatch ] = useReducer( toDoReducer, [], init );

    const handleNewToDo = useCallback( ( title = '' ) => {
        dispatch( {
            type: '[TODO] Add New ToDo',
            payload: {
                id: new Date().getTime(),
                title,
                done: false
            }
        } );
    }, [] );

    const handleRemoveToDo = useCallback( ( id ) => {
        dispatch( {
            type: '[TODO] Remove ToDo',
            payload: id
        } );
    }, [] );

    const handleToggleToDo = useCallback( ( id ) => {
        dispatch( {
            type: '[TODO] Toggle ToDo',
            payload: id
        } );
    }, [] );

    useEffect( () => {
        localStorage.setItem( TODOS_KEY, JSON.stringify( todos ) );
    }, [ todos ] );

    return {
        todos,
        handleNewToDo,
        handleRemoveToDo,
        handleToggleToDo
    };
};
