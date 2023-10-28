// Este objeto nos permite decodificar informacion
const decoder = new TextDecoder();
// Este objeto nos permite codificar informacion
const encoder = new TextEncoder();

/**
 * Esta funcion decodifica la informacion recibida desde el puerto serie
 *
 * @param {Uint8Array} data Informacion codificada
 * @returns {string} Cadena de texto legible por el usuario
 */
export const decode = (data) => decoder.decode(data);

/**
 * Esta funcion codifica la informacion que es enviada al puerto serie
 *
 * @param {string} data Cadena de texto a codificar
 * @returns {Uint8Array} Informacion codificada
 */
export const encode = (data) => encoder.encode(data);
