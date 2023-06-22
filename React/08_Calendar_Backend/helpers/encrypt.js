import bcryptjs from 'bcryptjs';

export const encrypt = ( password ) => bcryptjs.hashSync( password, bcryptjs.genSaltSync() );
