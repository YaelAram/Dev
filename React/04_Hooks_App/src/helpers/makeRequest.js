export const makeRequest = async ( url, options ) => {
    const resp = await fetch( url, options );
    const data = await resp.json();
    return data;
}