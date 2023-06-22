function sayHi(): void{
  console.log( 'Hi' );
}

const sayBye = ( name: string ): void => console.log( `Bye ${ name }` );

sayHi();
sayBye( 'Yael' );

// Argumentos Obligatorios
const fullName = ( name: string, lastName: string ): string => `${ name } ${ lastName }`;
console.log( fullName( 'Yael', 'Castillo' ) );

// Argumentos Opcionales
const fullNameOpt = ( name: string, lastName?: string ): string => `${ name } ${ lastName ?? '' }`;
console.log( fullNameOpt( 'Yael' ) );

// Argumetnos con valores por defecto
const fullNameUpper = ( name: string, upper: boolean = false, lastName?: string ): string => {
  const fullName: string = `${ name } ${ lastName ?? '' }`;
  return ( upper ) ? fullName.toUpperCase() : fullName;
};
console.log( fullNameUpper( 'Yael', true, 'Castillo' ) );
console.log( fullNameUpper( 'Yael' ) );

// Argumentos REST
const createFullName = ( firstName: string, ...names: string[] ): string => `${ firstName } ${ names.join( ' ' ) }`;
console.log( createFullName( 'Clark', 'Joseph', 'Kent' ) );
console.log( createFullName( 'Clark', 'Joseph' ) );
console.log( createFullName( 'Clark' ) );

// Tipo Funcion
const addNumbers = ( a: number, b: number ): number => a + b;
const greet = ( name: string ): string => `Hi ${ name }`;
/**
 * Se especifica el tipo de funcion que la constante debe guardar, los nombres de los parametros no son importantes
 * pero si su tipo
*/
const myFunction: ( x: number, y: number ) => number = addNumbers;
console.log( myFunction( 1, 2 ) );
