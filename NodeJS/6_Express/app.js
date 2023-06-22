const express = require( 'express' );
const hbs = require('hbs');
require( 'dotenv' ).config();

const app = express();
const PORT = process.env.PORT;

hbs.registerPartials( __dirname + '/views/partials' );

app.set( 'view engine', 'hbs' );
app.use( express.static( 'public' ) );

app.get( '/', ( req, res) => {
    res.render( 'index', {
        titulo: 'HBS Test',
        nombre: 'Yael Castillo'
    } );
} );

app.get( '/generic', ( req, res ) => {
    res.render( 'generic', {
        titulo: 'HBS Test',
        nombre: 'Yael Castillo'
    } );
} );

app.get( '/elements', ( req, res ) => {
    res.render( 'elements', {
        titulo: 'HBS Test',
        nombre: 'Yael Castillo'
    } );
} );

app.listen( PORT, () => console.log( `Servidor iniciado, puerto ${ PORT }` ) )
