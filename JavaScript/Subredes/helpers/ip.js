import { parseDecToBin } from "./parse.js";

/**
 *
 * @param {number} classType
 * @returns {string[]}
 */
const hostMask = (classType) => {
  const mask = [];

  for (let i = 0; i < classType; i++) mask.push("".padEnd(8, "1"));

  return mask;
};

/**
 *
 * @param {string} host
 * @param {number} numberOfSections
 * @returns {string[]}
 */
const splitHost = (host, numberOfSections) => {
  if (numberOfSections === 1) return [host];

  const sections = [];
  for (let i = 0; i < numberOfSections; i++)
    sections.push(host.slice(i * 8, (i + 1) * 8));

  return sections;
};

/**
 *
 * @param {number} i
 * @param {string[]} IP_BITS
 * @param {number} N
 * * @param {number} classType
 * @returns {string[][]}
 */
export const getAllIPBits = (i, IP_BITS, N, classType) => {
  const hostSize = 32 - 8 * classType;
  const numberOfSections = 4 - classType;

  return [
    [
      ...IP_BITS.slice(0, classType),
      ...splitHost(
        parseDecToBin(i).padStart(N, "0").padEnd(hostSize, "0"),
        numberOfSections
      ),
    ],
    [
      ...IP_BITS.slice(0, classType),
      ...splitHost(
        parseDecToBin(i).padStart(N, "0").padEnd(hostSize, "1"),
        numberOfSections
      ),
    ],
    [
      ...IP_BITS.slice(0, classType),
      ...splitHost(
        `${parseDecToBin(i)
          .padStart(N, "0")
          .padEnd(hostSize - 1, "0")}1`,
        numberOfSections
      ),
    ],
    [
      ...IP_BITS.slice(0, classType),
      ...splitHost(
        `${parseDecToBin(i)
          .padStart(N, "0")
          .padEnd(hostSize - 1, "1")}0`,
        numberOfSections
      ),
    ],
    [
      ...hostMask(classType),
      ...splitHost(
        `${"".padStart(N, "1").padEnd(hostSize, "0")}`,
        numberOfSections
      ),
    ],
  ];
};
