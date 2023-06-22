import { procesarMatista, obtenerResultado, numeroEspecialMayor, numeroEspecialMenor } from './js/procesador.js'
import './css/index.css';

const campoTexto = document.querySelector( '.campo' ),
      dialogo    = document.querySelector( '.resultado' ),
      contador   = document.querySelector( '.contador' );

const calcular = () => {
    const input = campoTexto.value;
    if( input.trim().length === 32 ){
        const [ signo, exponente, matista ] = [ 
            input.slice( 0, 1 ), 
            ( parseInt( input.slice( 1, 9 ), 2 ) - 127 ), 
            input.slice( 9 ) 
        ];
        if( exponente === 128 ) dialogo.innerText = 'Resultado: ' + numeroEspecialMayor( signo, matista );
        else if( exponente === -127 ) dialogo.innerText = 'Resultado: ' + numeroEspecialMenor( signo, matista );
        else dialogo.innerText = 'Resultado: ' + obtenerResultado( ...procesarMatista( exponente, matista ), signo );
    }
    else dialogo.innerText = "El binario debe tener 32 caracteres de longitud y contener solo 1 o 0";
};

const calcularLongitud = ( inputEvent ) => contador.innerText = inputEvent.target.value.length;

const limpiarCampo = () => {
    campoTexto.value = '';
    dialogo.innerText = '';
    contador.innerText = '0';
};

document.querySelector( '.calcular' ).addEventListener( 'click', calcular );
document.querySelector( '.limpiar' ).addEventListener( 'click', limpiarCampo );
campoTexto.addEventListener( 'input', calcularLongitud );
