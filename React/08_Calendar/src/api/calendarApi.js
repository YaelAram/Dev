import axios from 'axios';
import { getENV } from '../helpers/index';

const { VITE_API_URL } = getENV();

const calendarApi = axios.create( {
    baseURL: VITE_API_URL
} );

calendarApi.interceptors.request.use( ( config ) => {
    config.headers = { 
        ...config.headers,
        'x-token': localStorage.getItem( 'x-token' )
    };
    return config;
} );

export default calendarApi;
