import jwt from 'jsonwebtoken';

export const createJWT = ( uid, name ) => {
    return new Promise( ( resolve, reject ) => {
        const payload = { uid, name };
        jwt.sign( payload, process.env.PRIVATE_KEY, {
            expiresIn: '2d'
        }, ( error, token ) => {
            if( error ) reject( 'Error while trying to create JWT' );
            resolve( token );
        } );
    } );
};
