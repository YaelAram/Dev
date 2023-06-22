export const toDoReducer = ( todos, { type, payload } ) => {
    switch( type ) {
        case '[TODO] Add New ToDo':
            return [ payload, ...todos ];
        case '[TODO] Remove ToDo':
            return todos.filter( ( { id } ) => id !== payload );
        case '[TODO] Toggle ToDo':
            return todos.map( ( todo ) => {
                if( todo.id === payload ) return { ...todo, done: !todo.done };
                return todo;
            } );
        default:
            return todos;
    }
};