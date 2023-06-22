const text: string = "Yael";
console.log(`Hello ${ text }!`);

const age: number = 23;
console.log( `${ text } tiene ${ age } años` );

console.log( text.toUpperCase() );

// Evitar usar el tipo any
// VARIABLE as TIPO_DATO es una forma de hacer casting, tambien sirve <TIPO_DATO> VARIABLE
let something: any = 'Hello World';
console.log( ( something as string ).toLowerCase() );
console.log( (<string>something).startsWith( 'Hello' ) );

// Este arreglo puede contener strings y numbers
const numbersAndStrings: ( string | number)[] = [ 1, 2, 3, 4, '5' ];
console.log( numbersAndStrings );

const numbers: number[] = [ 1, 2, 3 ];
console.log( numbers );
console.log( numbers.reduce( ( prev, current ) => ( prev + current ), 0 ) );

// Tuplas
// Definen una especie de contrato que debe seguir un array, especificando el tipo de dato de cada item
const hero: [ string, number, boolean ] = [ 'Iron Man', 1, true ];
console.log( hero );
hero[ 0 ] = 'Thor';
hero[ 1 ] = 2;
hero[ 2 ] = false;
console.log( hero );

// Enums
// Si al primer valor le asignamos un valor minimo (number) los siguientes seguiran el conteo, Tuesday = 2
enum Month {
  january,
  february,
  march
};
enum Day {
  monday = 1,
  tuesday,
  wednesday
};
const currentMonth: Month = Month.january;
console.log( Month );
console.log( currentMonth );
console.log( Day );
console.log( Day.tuesday );
console.log( `Obtener el tipo string de un enum: ${ Month[ 1 ] }` );
console.log( `Obtener el tipo number de un enum: ${ Month[ 'january' ] }` );
