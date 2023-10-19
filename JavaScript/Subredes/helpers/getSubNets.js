import { parseDecToBin, parseToIp } from "./";

/**
 * @typedef {import("./getClassType").ClassInfo} ClassInfo
 */

/**
 * Retorna los octetos de red con el valor 255 en formato binario, para obtener la submascara de red
 *
 * @param {number} networkSections Numero de octetos de red de la clase IP
 * @returns {string[]} Octetos de red
 */
const hostMask = (networkSections) => {
  return Array(networkSections).fill("".padEnd(8, "1"));
};

/**
 * Esta funcion divide el string host en octetos
 *
 * @param {string} host String host a dividir
 * @param {number} numberOfSections Numero de octetos a crear
 * @returns {string[]} Array con los octetos
 */
const splitHost = (host, numberOfSections) => {
  // Si el host solo requiere una division lo devolvemos, host.length = 8 (ya es un octeto)
  if (numberOfSections === 1) return [host];

  // Creamos un array para almacenar los octetos
  const sections = [];
  // Iteramos segun el numero de octetos a obtener
  for (let i = 0; i < numberOfSections; i++)
    sections.push(host.slice(i * 8, (i + 1) * 8)); // Dividimos el host

  // Retornamos los octetos creados
  return sections;
};

/**
 * Esta funcion se encarga de calcular la informacion de cada subred
 *
 * @param {number} i Indica el ID de la subred
 * @param {string[]} IP_BITS Segmentos de la IP en formato binario
 * @param {number} numNetBits Numero de bits de red
 * @param {ClassInfo} classType Informacion de la clase IP
 * @returns {string[][]} Arreglo de strings con la informacion de las subredes en formato binario
 */
export const getAllIPBits = (i, IP_BITS, numNetBits, classType) => {
  /*
    Obtenemos la longitud en bits del segmento de host, el numero de octetos de red y el numero de octetos de 
    host segun la clase de direccion IP
  */
  const { hostSection, hostSections, networkSections } = classType;

  // Retornamos el array con la informacion de la subred
  return [
    // Calculamos el ID de red
    [
      ...IP_BITS.slice(0, networkSections), // Obtenemos los octetos de red
      ...splitHost(
        // Obtenemos los octetos de host
        // Cremos un host iniciando con ID de la subred y seguido de bits 0 para llenar la seccion de host
        parseDecToBin(i).padStart(numNetBits, "0").padEnd(hostSection, "0"),
        hostSections
      ),
    ],
    // Calculamos la IP broadcast
    [
      ...IP_BITS.slice(0, networkSections), // Obtenemos los octetos de red
      // Cremos un host iniciando con ID de la subred y seguido de bits 1 para llenar la seccion de host
      ...splitHost(
        parseDecToBin(i).padStart(numNetBits, "0").padEnd(hostSection, "1"),
        hostSections
      ),
    ],
    // Calculamos la primer IP valida
    [
      ...IP_BITS.slice(0, networkSections), // Obtenemos los octetos de red
      /*
        Cremos un host iniciando con ID de la subred y seguido de bits 0 para llenar la seccion de host, el 
        bit menos significativo lo establecemos en 1
      */
      ...splitHost(
        `${parseDecToBin(i)
          .padStart(numNetBits, "0")
          .padEnd(hostSection - 1, "0")}1`,
        hostSections
      ),
    ],
    // Calculamos la ultima IP valida
    [
      ...IP_BITS.slice(0, networkSections),
      /*
        Cremos un host iniciando con ID de la subred y seguido de bits 1 para llenar la seccion de host, el 
        bit menos significativo lo establecemos en 0
      */
      ...splitHost(
        `${parseDecToBin(i)
          .padStart(numNetBits, "0")
          .padEnd(hostSection - 1, "1")}0`,
        hostSections
      ),
    ],
    // Calculamos la IP de submascara
    [
      ...hostMask(networkSections), // Calculamos los octetos de la submascara del segmento de red
      // Cremos un host iniciando con ID de la subred y seguido de bits 0 para llenar la seccion de host
      ...splitHost(
        `${"".padStart(numNetBits, "1").padEnd(hostSection, "0")}`,
        hostSections
      ),
    ],
  ];
};

/**
 * Calcula la informacion de las subredes
 *
 * @param {string[]} IP_BITS Arreglo con los segmentos de IP en formato binario
 * @param {number} numSubNets Numero de subredes a calcular
 * @param {number} numNetBits Numero de bits de red
 * @param {ClassInfo} classType Informacion de la clase IP
 * @returns {any[]} Arreglo de objetos, cada objeto representa una subred
 */
export const getSubNets = (IP_BITS, numSubNets, numNetBits, classType) => {
  const table = [];

  for (let i = 0; i < numSubNets; i++) {
    const [idNet, broadcastNet, firstNet, lastNet, netMask] = getAllIPBits(
      i,
      IP_BITS,
      numNetBits,
      classType
    );

    table.push({
      "ID red": parseToIp(idNet),
      "Primera IP": parseToIp(firstNet),
      "Ultima IP": parseToIp(lastNet),
      "Bradcast IP": parseToIp(broadcastNet),
      Mascara: parseToIp(netMask),
    });
  }

  return table;
};
