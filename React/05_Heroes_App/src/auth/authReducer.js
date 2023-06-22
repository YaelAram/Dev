import { types } from './types/types';

export const authReducer = ( state, { type, payload } ) => {
    switch( type ){
        case types.login:
            return { ...state, logged: true, name: payload };
        case types.logout:
            return { logged: false, name: undefined };;
        default:
            return state;
    }
};
