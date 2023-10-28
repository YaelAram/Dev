import { console } from "../constants";
import { decode } from "./parse";

let acumulator = ""; // Contiene la informacion leida desde el puerto serie
const delimiter = "\n\r"; // Contiene la cadena con los caracteres que indican el fin de un mensaje

/**
 * Esta funcion muestra al usuario la informacion recibida por la computadora mediante el puerto serie seleccionado
 *
 * @param {Uint8Array} value Valor leido sin decodificar
 */
export const showRead = (value) => {
  const data = decode(value); // Decodificamos el valor leido
  acumulator = acumulator.concat(data); // Concatenamos el valor leido con los anteriores mensaje leidos
  const position = acumulator.indexOf(delimiter); // Buscamos el indice de posicion de la subcadena '\n\r' en la cadena

  /*
    El caracter de fin de mensaje '\n\r' no fue encontrado en la lectura, salimos del metodo para evitar mostrar
    informacion incompleta al usuario
  */
  if (position === -1) return;

  // Se limpian las ultimas 8 lecturas del puerto
  if (console.children.length === 8) console.textContent = "";

  const message = acumulator.slice(0, position); // Obtenemos el mensaje antes del delimitador
  // Asignamos al acumulador la porcion del siguiente mensaje sin incluir el caracter delimitador del anterior mensaje
  acumulator = acumulator.slice(position).replace(delimiter, "");

  // Mostramos al usuario la lectura del puerto
  console.insertAdjacentHTML(
    "beforeend",
    `<p class="console-line">${message}</p>`
  );
};
