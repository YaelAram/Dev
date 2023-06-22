import './css/index.css';
import { crearFila } from './js/html-builder.js';
import { obtenerUsuarios, consultarUsuario, crearUsuario, actualizarUsuario, borrarUsuario } from './js/http-provider';

const tbody = document.querySelector( 'tbody' ),
      consulta = document.querySelector( '.resultado-consulta' );

obtenerUsuarios().then( ( data ) => {
    for (const usuario of data) tbody.append( crearFila( usuario ) );
} );

const consultar = () => {
    consultarUsuario( document.querySelector( '.id-consulta' ).value ).then( ( { id, email, first_name } ) => {
        consulta.innerText = `${ id } -> ${ first_name } - ${ email }`;
    } );
};

crearUsuario( {
    name: 'Yael',
    job: 'Student'
} ).then( console.log );

actualizarUsuario( 2, {
    name: 'Yael',
    job: 'Developer'
} ).then( console.log );

borrarUsuario( 2 ).then( console.log )

document.querySelector( '.consultar' ).addEventListener( 'click', consultar );
