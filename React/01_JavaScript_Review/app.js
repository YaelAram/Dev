const getBook = async () => {
    const params = new URLSearchParams();
    params.append( 'q', 'Las Dos Torres' );
    params.append( 'filter', 'full' );
    params.append( 'maxResults', 5 );
    const resp = await fetch( `https://www.googleapis.com/books/v1/volumes?${ params.toString() }` );
    if( !resp.ok ) console.log( 'Request have failed' );
    const data = await resp.json();
    console.log( data );
};

getBook();
