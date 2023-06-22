import React, { useRef } from 'react';

export const InputToDo = React.memo(
    ( { handleNewToDo } ) => {
        const titleInput = useRef();

        const handleSubmit = ( evt ) => {
            evt.preventDefault();
            const title = titleInput.current.value.trim();
            if( title ){
                titleInput.current.value = '';
                handleNewToDo( title );
            }
        };

        return (
            <form onSubmit={ handleSubmit } aria-label="form">
                <input type="text" placeholder="Buy Milk" ref={ titleInput } autoFocus />
                <input type="submit" value="Create"/>
            </form>
        );
    }
);
