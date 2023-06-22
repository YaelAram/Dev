import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export function SearchBar( { onAddTopic } ) {
    const inputSearch = useRef( '' );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const newTopic = inputSearch.current.value.trim().toUpperCase();
        if( !newTopic ) return;
        onAddTopic( newTopic );
        inputSearch.current.value = '';
    };

    return (
        <form onSubmit={ handleSubmit } aria-label="form">
            <input type="text" placeholder="e.g. Dr. House" ref={ inputSearch } autoFocus />
        </form>
    );
};

SearchBar.propTypes = {
    onAddTopic: PropTypes.func.isRequired
};
