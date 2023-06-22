import { useState } from 'react';

export const useForm = ( init ) => {
    const [ searchText, setSearchText ] = useState( init );
    const handleOnChange = ( evt ) => setSearchText( evt.target.value );
    const handleReset = () => setSearchText( '' );

    return {
        searchText,
        handleOnChange,
        handleReset
    };
};
