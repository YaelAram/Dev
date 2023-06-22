import User from "../model/user";

export const existsUserByEmail = async ( email: string ) => {
    const user = await User.findOne( { where: { email } } );
    if( user ) throw new Error( `There is already an user with email ${ email }` )
};
