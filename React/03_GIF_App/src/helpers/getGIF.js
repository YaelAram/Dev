export const getGIF = async ( topic ) => {
    const params = new URLSearchParams();
    params.append( 'api_key', 'NIsVTCVQbXESmBWlr6J2gVftLTzOIfQS' );
    params.append( 'q', topic );
    params.append( 'limit', '6' );

    const resp = await fetch( `https://api.giphy.com/v1/gifs/search?${ params.toString() }` );
    const { data } = await resp.json();
    return data.map( ( { id, title, images } ) => ( {
        id,
        title: title.trim() || 'No title',
        url: images.downsized_medium.url
    } ) ); 
};
