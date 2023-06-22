import { useState, useEffect } from 'react';

import { getGIF } from '../helpers/getGIF';

export const useFetch = ( topic ) => {
    const [ images, setImages ] = useState( [] );

    const getImages = async () => {
        const newImages = await getGIF( topic );
        setImages( newImages );
    };

    useEffect( () => {
        getImages();
    }, [] );

    return images;
};
