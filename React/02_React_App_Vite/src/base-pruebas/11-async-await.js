export const getBook = async () => {
    try{
        const params = new URLSearchParams();
        params.append( 'q', 'Las Dos Torres' );
        params.append( 'maxResults', 1 );
        const resp = await fetch( `https://www.googleapis.com/books/v1/volumes?${ params.toString() }` );
        const data = await resp.json();
        return data?.items[ 0 ]?.volumeInfo?.title;
    }
    catch( error ){
        console.error( error );
        return undefined;
    }
};

export const getBookError = async () => {
    try{
        const params = new URLSearchParams();
        params.append( 'q', 'Las Dos Torres' );
        params.append( 'maxResults', 1 );
        const resp = await fetch( `https://www.googleapis.com/books/v1/volumes${ params.toString() }` );
        const data = await resp.json();
        return data?.items[ 0 ]?.volumeInfo?.title;
    }
    catch( error ){
        return undefined;
    }
};
