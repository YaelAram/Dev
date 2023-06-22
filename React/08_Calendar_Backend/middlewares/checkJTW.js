import { request, response } from 'express';
import jwt from 'jsonwebtoken';

/**
 * 
 * @param { request } req 
 * @param { response } res 
 * @param { Function } next 
 */
export const checkJWT = ( req, res, next ) => {
    const token = req.header( 'x-token' );

    if( !token ) {
        return res.status( 401 ).json( {
            ok: false,
            msg: 'Token is required'
        } );
    }

    try{
        const { uid, name } = jwt.verify( token, process.env.PRIVATE_KEY );
        req.uid = uid;
        req.name = name;
    }
    catch( error ){
        return res.status( 401 ).json( {
            ok: false,
            msg: 'Unauthorized'
        } );
    }

    next();
};
