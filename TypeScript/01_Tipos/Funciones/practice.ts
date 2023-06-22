// Funciones Básicas
const sumar = ( a: number, b: number ): number => a + b;
console.log( sumar( 1, 2) );

const contar = ( heroes: string[] ): number => heroes.length;
const heroes: string[] = [ "Flash", "Arrow", "Superman", "Linterna Verde" ];
console.log( contar( heroes ) );

//Parametros por defecto
const llamarBatman = ( llamar: boolean = true ): void => {
  if( llamar ) console.log("Batiseñal activada");
}
llamarBatman();

// Rest?
const unirheroes = ( ...personas: string[] ): string => personas.join(", ");
console.log( unirheroes( ...heroes ) );

// Tipo funcion
const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: string[] ): void => {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: ( a: number, b: string, c: boolean, d: string[] ) => void;
noHaceNadaTampoco = noHaceNada
