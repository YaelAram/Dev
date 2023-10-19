import {
  getClassType,
  getIPBits,
  getNumHosts,
  getNumNetBits,
  getNumSubNets,
  getSubNets,
  showData,
  showTable,
} from "./";

/**
 * Esta funcion calcula a partir del numero de subredes requerido por el usuario
 *
 * @param {number} numSubNets Numero de Subredes
 * @param {string} IP IP ingresada por el usuario
 */
export const fromSubnet = (numSubNets, IP) => {
  // Contiene el numero de bits necesarios para el numero de subredes
  const numNetBits = getNumNetBits(numSubNets);
  // Arreglo de longitud 4, cada segmento contiene los 8 bits de la representacion binaria del numero decimal
  const IP_BITS = getIPBits(IP);
  // Contiene informacion de la clase de IP
  const classType = getClassType(IP);
  // Contiene el numero de hosts soportado
  const hosts = getNumHosts(numNetBits, classType);
  // Contiene el arreglo de objetos, cada objeto contiene la informacion de cada subred
  const table = getSubNets(IP_BITS, numSubNets, numNetBits, classType);

  // Muestra la informacion del problema
  showData(IP, hosts, numSubNets, numNetBits, classType);
  showTable(table);
};

/**
 * Esta funcion calcula a partir del numero de hosts requerido por el usuario
 *
 * @param {number} numHosts Numero de hosts
 * @param {string} IP IP ingresada por el usuario
 */
export const fromHost = (numHosts, IP) => {
  // Contiene informacion de la clase de IP
  const classType = getClassType(IP);
  // Calcula el numero de subredes en las cuales se puede dividir una red, conteniendo el numero de hosts indicado
  const numSubNets = Math.pow(
    2,
    classType.hostSection - getNumSubNets(numHosts)
  );

  // Ejecutamos la funcion que calcula la tabla de IP's a partir del numero de subredes necesarias
  fromSubnet(numSubNets, IP, classType);
};
