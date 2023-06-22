import bcryptjs from 'bcryptjs';

export const comparePasswords = ( passwordReq, passwordEncrypt ) =>  bcryptjs.compareSync( passwordReq, passwordEncrypt );
