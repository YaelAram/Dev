import { request, response } from 'express';
import { validationResult } from 'express-validator';

/**
 * 
 * @param { request } req 
 * @param { response } res 
 * @param { Function } next 
 */
export const checkErrors = ( req, res, next ) => {
    const errors = validationResult( req );

    if( !errors.isEmpty() ){
        return res.status( 400 ).json( {
            ok: false,
            errors: errors.mapped()
        } );
    }

    next();
};
