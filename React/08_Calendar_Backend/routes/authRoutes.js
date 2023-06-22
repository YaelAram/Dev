import { Router } from 'express';
import { check } from 'express-validator';

import { checkErrors, checkJWT } from '../middlewares/index.js';
import { getNewToken, postLogin, postNewUser } from '../controllers/authController.js';

export const authRoutes = Router();

authRoutes.post( '/', [
    check( 'email' ).isEmail().withMessage( 'Wrong email format' ),
    check( 'email' ).isLength( { min: 8 } ).withMessage( 'Password field must have at least 8 character' ),
    checkErrors
], postLogin );

authRoutes.post( '/user', [
    check( 'name' ).not().isEmpty().withMessage( 'Name field is required' ),
    check( 'email' ).isEmail().withMessage( 'Wrong email format' ),
    check( 'password' ).isLength( { min: 8 } ).withMessage( 'Password field must have at least 8 character' ),
    checkErrors
], postNewUser );

authRoutes.get( '/renew', [
    checkJWT
], getNewToken );
