/**
 * Contiene la informacion necesaria para describir una clase de red
 *
 * @typedef {Object} ClassInfo
 * @property {number} networkSection Contiene el numero de bits que forma el segmento de red
 * @property {number} hostSection Contiene el numero de bits que forma el segmento de host
 * @property {number} networkSections Contiene el numero de octetos de red
 * @property {number} hostSections Contiene el numero de octetos de host
 */

/**
 * Contiene la informacion de las clases de red permitidas por la aplicacion
 *
 * @typedef {Object} ClassType
 * @property {ClassInfo} a // Contiene la informacion para la clase A
 * @property {ClassInfo} b // Contiene la informacion para la clase B
 * @property {ClassInfo} c // Contiene la informacion para la clase C
 */
export const ClassType = {
  a: {
    networkSection: 8,
    hostSection: 24,
    networkSections: 1,
    hostSections: 3,
  },
  b: {
    networkSection: 16,
    hostSection: 16,
    networkSections: 2,
    hostSections: 2,
  },
  c: {
    networkSection: 24,
    hostSection: 8,
    networkSections: 3,
    hostSections: 1,
  },
};

/**
 * Esta funcion permite obtener la clase de IP con la cual el usuario quiere trabajar y devolver un objeto
 * con la informacion necesaria de cada clase. Si la IP no es de clase A, B o C la funcion retorna -1
 *
 * @param {string} ip La IP ingresada por el usuario
 * @returns {ClassInfo} Informacion basica de la clase A, B o C
 */
export const getClassType = (ip) => {
  const firstSection = Number(ip.split(".").at(0)); // Obtenemos el primer numero/segmento de la IP

  // Retornamos el objeto de la clase A
  if (firstSection >= 0 && firstSection <= 127) return ClassType.a;
  // Retornamos el objeto de la clase B
  else if (firstSection >= 128 && firstSection <= 191) return ClassType.b;
  // Retornamos el objeto de la clase C
  else if (firstSection >= 192 && firstSection <= 223) return ClassType.c;
};
