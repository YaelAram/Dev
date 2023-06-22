import { getGIF } from '../../src/helpers/getGIF';

describe( 'getGIF function', () => {
    test('should return an array of objects with properties id, title, url', async () => {
        const gifs = await getGIF( 'rammstein' );
        for ( const gif of gifs ) {
            expect( gif ).toMatchObject( {
                id: expect.any( String ),
                title: expect.any( String ),
                url: expect.any( String )
            } );
        }
    } );
} );
