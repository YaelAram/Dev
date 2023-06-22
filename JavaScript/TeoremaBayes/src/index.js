import './css/index.css';
import { validateData } from './model/validation';
import { createThree, createThree3 } from './model/three';
import { getMarginalProbability, getBayes } from './helpers/operation';

const x = [ 0.6, 0.3, 0.7, 0.3, 0.2, 0.8, 0.1, 0.1, 0.9 ];

const main = () => {
    if( validateData( ...x ) ){
        const three = createThree3( ...x );
        console.log( three );
        console.log( '\nProbabilidad Marginal: ' );
        console.log( `P( reparacion ): ${ getMarginalProbability( three, 'W' ) }` );
        console.log( `P( no reparacion ): ${ getMarginalProbability( three, 'V' ) }` );
        console.log( '\nProbabilidad Teorema de Bayes: ' );
        console.log( `P( marca 1 | reparacion ): ${ getBayes( three, 'X|V' ) }` );
        console.log( `P( marca 1 | no reparacion ): ${ getBayes( three, 'X|W' ) }` );
        console.log( `P( marca 2 | reparacion ): ${ getBayes( three, 'Y|V' ) }` );
        console.log( `P( marca 2 | no reparacion ): ${ getBayes( three, 'Y|W' ) }` );
        console.log( `P( marca 3 | reparacion ): ${ getBayes( three, 'Z|V' ) }` );
        console.log( `P( marca 3 | no reparacion ): ${ getBayes( three, 'Z|W' ) }` );
    }
    else console.log( 'Revisa los datos, los datos deben pertenecer al intervalo [ 0, 1 ]' );
}

main();
