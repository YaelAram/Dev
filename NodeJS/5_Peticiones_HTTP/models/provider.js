const axios = require( 'axios' );

class Provider{
    constructor(){
        this.historial = [];
    }

    async buscarCiudad( lugar = '' ){
        try{
            const instance = axios.create( {
                'baseURL': `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                'params': {
                    'limit': 5,
                    'language': 'es',
                    'access_token': process.env.MAPBOX_TOKEN 
                }
            } );
            const resp = ( await instance.get() ).data.features;
            return resp.map( ( { id, place_name, center } ) => ( {
                id,
                place_name,
                longitud: center[0],
                latitud: center[1]
            } ) );
        }
        catch( error ){
            return [];
        }
    }

    async obtenerClima( lon, lat ){
        try{
            const instance = axios.create( {
                'baseURL': 'https://api.openweathermap.org/data/2.5/weather',
                'params': {
                    lat,
                    lon,
                    appid: process.env.OPEN_WEATHER_TOKEN,
                    units: 'metric',
                    lang: 'es'
                }
            } );
            const { temp, temp_min, temp_max } = ( await instance.get() ).data.main;
            return {
                temp,
                temp_min,
                temp_max
            };
        }
        catch( error ){
            return {};
        }
    }
}

module.exports = Provider;
