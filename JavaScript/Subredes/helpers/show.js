/**
 * @type {HTMLSpanElement}
 */
const ipSpan = document.querySelector("#ip-base");
/**
 * @type {HTMLSpanElement}
 */
const hostsSpan = document.querySelector("#num-hosts");
/**
 * @type {HTMLSpanElement}
 */
const numSubnetSpan = document.querySelector("#num-subnet");
/**
 * @type {HTMLSpanElement}
 */
const bitsSubnetSpan = document.querySelector("#bits-subnet");
/**
 * @type {HTMLSpanElement}
 */
const bitsHostSpan = document.querySelector("#bits-host");

/**
 *
 * @param {string} IP
 * @param {number} hosts
 * @param {number} NS
 * @param {number} N
 * @param {number} classType
 */
export const showData = (IP, hosts, NS, N, classType) => {
  ipSpan.innerText = IP;
  hostsSpan.innerText = hosts;
  numSubnetSpan.innerText = NS;
  bitsSubnetSpan.innerText = N;
  bitsHostSpan.innerText = (4 - classType) * 8 - N;
};

const tbody = document.querySelector("tbody");

/**
 *
 * @param {any[]} table
 */
export const showTable = (table) => {
  let html = "";

  tbody.textContent = "";

  table.forEach((subnet) => {
    const subnetTR = `<tr>${Object.values(subnet)
      .map((value) => `<td>${value}</td>`)
      .join("")}</tr>`;

    html = html.concat(subnetTR);
  });

  tbody.insertAdjacentHTML("afterbegin", html);
};
