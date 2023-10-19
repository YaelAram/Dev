/**
 * Convierte de binario a decimal
 *
 * @param {string} num Numero binario
 * @returns {number} Numero en sistema decimal
 */
export const parseBinToDec = (num) => Number.parseInt(num, 2);

/**
 * Convierte de decimal a binario
 *
 * @param {number} num Numero decimal
 * @returns {string} Numero en sistema binario
 */
export const parseDecToBin = (num) => (num >>> 0).toString(2);

/**
 * Permite convertir un arreglo con los 4 segmentos de una IP en sistema binario a un string con numeros en formato
 * decimal y separados por un punto (formato legible por un ser humano)
 *
 * @param {string[]} ipSegments Arreglo con los segmentos de IP en formato binario
 */
export const parseToIp = (ipSegments) => {
  /*
    Retornamos el resultado de iterar sobre el arreglo, cada elemento se convierte de formato binario a decimal, por
    ultimo, se concatenan los 4 segmentos con un "." entre cada uno de ellos
  */
  return ipSegments.map(parseBinToDec).join(".");
};
