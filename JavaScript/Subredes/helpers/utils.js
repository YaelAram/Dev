import { getAllIPBits } from "./ip.js";
import { parseDecToBin, parseToIp } from "./parse.js";

/**
 *
 * @param {number} NS
 * @returns { number }
 */
export const getN = (NS) => Math.ceil(Math.log(NS) / Math.log(2));

/**
 *
 * @param {string} ip
 * @returns {string[]}
 */
export const getIPBits = (ip) => {
  return ip.split(".").map((value) => parseDecToBin(+value).padStart(8, "0"));
};

/**
 *
 * @param {number} N
 * @param {number} classType
 * @returns { number }
 */
export const getNumberOfHost = (N, classType) => {
  return Math.pow(2, (4 - classType) * 8 - N) - 2;
};

/**
 *
 * @param {string[]} IP_BITS
 * @param {number} NS
 * @param {number} N
 * @param {number} classType
 * @returns {any[]}
 */
export const getIP = (IP_BITS, NS, N, classType) => {
  const table = [];

  for (let i = 0; i < NS; i++) {
    const [idNet, broadcastNet, firstNet, lastNet, netMask] = getAllIPBits(
      i,
      IP_BITS,
      N,
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

/**
 *
 * @param {number} NH
 * @returns { number }
 */
export const getNS = (NH) => Math.ceil(Math.log(NH - 2) / Math.log(2));
