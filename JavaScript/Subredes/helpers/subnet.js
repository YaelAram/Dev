import { showData, showTable } from "./show.js";
import { getIP, getIPBits, getN, getNS, getNumberOfHost } from "./utils.js";

/**
 *
 * @param {number} NS
 * @param {string} IP
 */
export const fromSubnet = (NS, IP) => {
  const N = getN(NS);
  const IP_BITS = getIPBits(IP);
  const hosts = getNumberOfHost(N);
  const table = getIP(IP_BITS, NS, N);

  showData(IP, hosts, NS, N);
  showTable(table);
};

export const fromHost = (NH, IP) => {
  const NS = getNS(NH);

  fromSubnet(NS, IP);
};
