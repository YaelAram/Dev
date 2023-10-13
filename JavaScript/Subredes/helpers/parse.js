/**
 *
 * @param {string} num
 * @returns {number}
 */
export const parseBinToDec = (num) => Number.parseInt(num, 2);

/**
 *
 * @param {number} num
 * @returns {string}
 */
export const parseDecToBin = (num) => (num >>> 0).toString(2);

/**
 *
 * @param {string[]} ipSegments
 */
export const parseToIp = (ipSegments) => {
  return ipSegments.map(parseBinToDec).join(".");
};
