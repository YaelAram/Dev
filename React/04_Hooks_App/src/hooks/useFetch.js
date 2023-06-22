import { useState, useEffect } from 'react';
import { makeRequest } from '../helpers/makeRequest';

export const useFetch = ( url, options ) => {
    const initialState = {
        info: null,
        isLoading: true
    };

    const [ data, setData ] = useState( initialState );

    const getData = async () => {
        setData( initialState );
        const info = await makeRequest( url, options );
        setData( {
            info,
            isLoading: false
        } );
    }; 

    useEffect( () => {
        getData();
    }, [ url, options ] );

    return {
        ...data
    };
};
