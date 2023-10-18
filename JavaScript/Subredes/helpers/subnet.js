import { showData, showTable } from "./show.js";
import { getIP, getIPBits, getN, getNS, getNumberOfHost } from "./utils.js";

/**
 *
 * @param {number} NS
 * @param {string} IP
 */
export const fromSubnet = (NS, IP, classType) => {
  const N = getN(NS);
  const IP_BITS = getIPBits(IP);
  const hosts = getNumberOfHost(N, classType);
  const table = getIP(IP_BITS, NS, N, classType);

  showData(IP, hosts, NS, N, classType);
  showTable(table);
};

export const fromHost = (NH, IP, classType) => {
  const NS = Math.pow(2, (4 - classType) * 8 - getNS(NH));

  fromSubnet(NS, IP, classType);
};
