import { Request, Response } from "express";
import User from "../model/user";

export const getUsers = async ( req: Request, res: Response ) => {
    const { limit = 10, offset = 0 } = req.query;
    const users = await User.findAll( { limit: Number( limit ), offset: Number( offset ) } );
    res.status( 200 ).json( { users } );
};

export const getUser = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const user = await User.findByPk( id );
    if( !user ) return res.status( 404 ).json( { msg: `User with ID: ${ id } is not in the DB` } );
    res.status( 200 ).json( { user } );
};

export const createUser = async ( req: Request, res: Response ) => {
    const { name, email } = req.body;
    try{
        const user = await User.create( { name, email, state: 1 } );
        res.status( 200 ).json( user );
    }
    catch( error: any ){
        console.log( error );
        res.status( 500 ).json( `Error` );
    }
};

export const updateUser = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const { name, email } = req.body;
    if( !name && !email ) return res.status( 400 ).json( { msg: `The data sent is equal to the data in the DB` } );
    const user = await User.findByPk( id );
    if( !user ) return res.status( 404 ).json( { msg: `User with ID: ${ id } is not in the DB` } );
    if( name !== user.getDataValue( 'name' ) ) user.set( { name } );
    if( email ) user.set( { email } );
    await user.save();
    res.status( 200 ).json( { msg: 'User updated', user } );
};

export const deleteUser = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const user = await User.findByPk( id );
    if( !user ) return res.status( 404 ).json( { msg: `User with ID: ${ id } is not in the DB` } );
    if( !user.getDataValue( 'state' ) ) return res.status( 400 ).json( { msg: 'That user is already inactive' } );
    user.set( { state: false } );
    await user.save();
    res.status( 200 ).json( { msg: 'User deleted', user } );
};
