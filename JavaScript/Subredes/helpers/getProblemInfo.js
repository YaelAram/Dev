import { parseDecToBin } from "./";

/**
 * @typedef {import("./getClassType").ClassInfo} ClassInfo
 */

/**
 * Obtiene el numero de bits de red necesarios para albergar X numero de subredes
 *
 * @param {number} numSubNets Numero de subredes
 * @returns { number } Numero de bits de red necesarios
 */
export const getNumNetBits = (numSubNets) => {
  return Math.ceil(Math.log(numSubNets) / Math.log(2));
};

/**
 * Convierte la IP ingresada por el usuario en su representacion binaria
 *
 * @param {string} ip Direccion IP a convertir
 * @returns {string[]} Arreglo de longitud 4 con las representaciones en binario de los segmentos de IP
 */
export const getIPBits = (ip) => {
  return ip.split(".").map((value) => parseDecToBin(+value).padStart(8, "0"));
};

/**
 * Calcula el numero de hosts que puede albergar cada subred
 *
 * @param {number} numNetBits
 * @param {ClassInfo} classType
 * @returns { number }
 */
export const getNumHosts = (numNetBits, classType) => {
  return Math.pow(2, classType.hostSection - numNetBits) - 2;
};

/**
 * Calcula el numero de subredes necesarias segun el numero de hosts recibido
 *
 * @param {number} numHosts Numero de hosts requerido
 * @returns { number } Numero de subredes
 */
export const getNumSubNets = (numHosts) => {
  return Math.ceil(Math.log(numHosts - 2) / Math.log(2));
};
