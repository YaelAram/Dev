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
 * @returns { number }
 */
export const getNumberOfHost = (N) => Math.pow(2, 8 - N) - 2;

/**
 *
 * @param {number} i
 * @param {string[]} IP_BITS
 * @param {number} N
 * @returns {string[][]}
 */
const getAllIPBits = (i, IP_BITS, N) => {
  return [
    [...IP_BITS.slice(0, 3), parseDecToBin(i).padStart(N, "0").padEnd(8, "0")],
    [...IP_BITS.slice(0, 3), parseDecToBin(i).padStart(N, "0").padEnd(8, "1")],
    [
      ...IP_BITS.slice(0, 3),
      `${parseDecToBin(i).padStart(N, "0").padEnd(7, "0")}1`,
    ],
    [
      ...IP_BITS.slice(0, 3),
      `${parseDecToBin(i).padStart(N, "0").padEnd(7, "1")}0`,
    ],
    [...IP_BITS.slice(0, 3), `${"".padStart(N, "1").padEnd(8, "0")}`],
  ];
};

/**
 *
 * @param {string[]} IP_BITS
 * @param {number} NS
 * @param {number} N
 * @returns {any[]}
 */
export const getIP = (IP_BITS, NS, N) => {
  const table = [];

  for (let i = 0; i < NS; i++) {
    const [idNet, broadcastNet, firstNet, lastNet, netMask] = getAllIPBits(
      i,
      IP_BITS,
      N
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
