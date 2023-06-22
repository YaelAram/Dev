import User from "../models/User.js";
import { encrypt, comparePasswords } from '../helpers/index.js';

/**
 * 
 * @param { Object } body 
 * @returns 
 */
export const createUser = async ( body ) => {
    try{
        let user = await User.findOne( { email: body.email } );

        if( user ) throw new Error( `Email ${ body.email } is already registered` );

        user = new User( body );
        user.password = encrypt( user.password );
        await user.save();

        return;
    }
    catch( { message } ){
        throw new Error( `Error while trying to create new user: ${ message }` );
    }
};

/**
 * 
 * @param { string } email 
 * @param { string } password 
 * @returns
 */
export const login = async ( email, password ) => {
    try{
        let user = await User.findOne( { email } );

        if( !user ) throw new Error( 'Wrong email and password' );

        const flag = comparePasswords( password, user.password );

        if( !flag ) throw new Error( 'Wrong email and password' );

        return user;
    }
    catch( { message } ){
        throw new Error( `Error while trying to create new user: ${ message }` );
    }
};
