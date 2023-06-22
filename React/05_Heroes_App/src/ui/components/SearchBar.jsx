import React from 'react';
import { useForm } from '../../ui';

export const SearchBar = React.memo(
    ( { handleSearch, init } ) => {
        const { searchText, handleOnChange, handleReset } = useForm( init );

        const handleSubmit = ( evt ) => {
            evt.preventDefault();
            const search = searchText.trim().toLowerCase();
            if( search ){
                handleSearch( search );
                handleReset();
            }
        };

        return (
            <form onSubmit={ handleSubmit } aria-label="form">
                <input 
                    type="text" 
                    placeholder="Spider Man"
                    className="input-text"
                    onChange={ handleOnChange }
                    value={ searchText }
                />
                <input type="submit" value="Search" className="primary-button" />
            </form>
        );
    }
);
