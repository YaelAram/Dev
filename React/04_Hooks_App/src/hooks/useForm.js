import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
    const [ form, setForm ] = useState( initialForm );

    const handleChange = ( { target } ) => {
        const { name, value } = target;
        setForm( ( prevForm ) => ( { ...prevForm, [ name ]: value } ) );
    };

    const handleReset = () => setForm( initialForm );

    return {
        ...form,
        form,
        handleChange,
        handleReset
    };
};
