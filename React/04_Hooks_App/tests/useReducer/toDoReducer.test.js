import { toDoReducer } from '../../src/useReducer/toDoReducer';

describe( 'ToDoReducer', () => {
    const initialState = [ {
        id: 1,
        title: 'Hello World',
        done: false
    } ];
    
    test( 'Should return an initial state', () => {
        const newState = toDoReducer( initialState, {} );
        expect( newState ).toBe( initialState );
    } );

    test( 'Should return an array of two elements', () => {
        const action = {
            type: '[TODO] Add New ToDo',
            payload: {
                id: 2,
                title: 'Goodbye World',
                done: false
            }
        };
        const newState = toDoReducer( initialState, action );

        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
    } );

    test( 'Should return an empty array', () => {
        const action = {
            type: '[TODO] Remove ToDo',
            payload: 1
        }
        const newState = toDoReducer( initialState, action );

        expect( newState.length ).toBe( 0 );
    } );

    test( 'Should toogle the done field of the ToDo Item', () => {
        const action = {
            type: '[TODO] Toggle ToDo',
            payload: 1
        }
        const newState = toDoReducer( initialState, action );

        expect( newState.length ).toBe( 1 );
        expect( newState[ 0 ].done ).toBe( !initialState.done );
    } );
} );