const { Router } = require( 'express' );
const { check } = require( 'express-validator' );

const { login, googleLogin } = require( '../controllers/auth_routes_controller' );
const checkFieldsForErrors = require('../middlewares/check_fields' );

const router = Router();

router.post( '/login', [
    check( 'email', 'The email field does not have a valid email format' ).isEmail(),
    check( 'password', 'Password field must have at least 8 characters' ).isLength( { min: 8 } ),
    checkFieldsForErrors
], login );

router.post( '/google', [
    check( 'id_token', 'The id_token field is empty' ).notEmpty(),
    checkFieldsForErrors
], googleLogin );

module.exports = router;
