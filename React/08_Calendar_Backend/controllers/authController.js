import { request, response } from 'express';
import { createUser, login } from '../services/authService.js';
import { createJWT } from '../helpers/index.js';

/**
 * 
 * @param { request } req 
 * @param { response } res 
 */
export const postLogin = async ( req, res ) => {
    const{ email, password } = req.body;

    try{
        const user = await login( email, password );
        const token = await createJWT( user.id, user.name );

        res.status( 200 ).json( {
            ok: true,
            token,
            uid: user.id,
            name: user.name
        } );
    }
    catch( { message } ){
        res.status( 500 ).json( {
            ok: false,
            error: message
        } );
    }
};

/**
 * 
 * @param { request } req 
 * @param { response } res 
 */
export const postNewUser = async ( req, res ) => {
    try{
        await createUser( req.body );

        res.status( 201 ).json( {
            ok: true,
            msg: 'New user created'
        } );
    }
    catch( { message } ){
        res.status( 500 ).json( {
            ok: false,
            error: message
        } );
    }
};

/**
 * 
 * @param { request } req 
 * @param { response } res 
 */
export const getNewToken = async ( req, res ) => {
    const { uid, name } = req;

    try{
        const token = await createJWT( uid, name );

        res.status( 200 ).json( {
            ok: true,
            token,
            uid,
            name
        } );
    }
    catch( { message } ){
        res.status( 500 ).json( {
            ok: false,
            error: message
        } );
    }
};
