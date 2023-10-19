/**
 * @typedef {import("./getClassType").ClassInfo} ClassInfo
 */

/**
 * @type {HTMLSpanElement} Contiene el elemento SPAN que muestra la IP del problema
 */
const ipSpan = document.querySelector("#ip-base");
/**
 * @type {HTMLSpanElement} Contiene el elemento SPAN que muestra el numero de hosts del problema
 */
const hostsSpan = document.querySelector("#num-hosts");
/**
 * @type {HTMLSpanElement} Contiene el elemento SPAN que muestra el numero de subredes del problema
 */
const numSubnetSpan = document.querySelector("#num-subnet");
/**
 * @type {HTMLSpanElement} Contiene el elemento SPAN que muestra el numero de bits prestados al segmento de red
 */
const bitsSubnetSpan = document.querySelector("#bits-subnet");
/**
 * @type {HTMLSpanElement} Contiene el elemento SPAN que muestra el numero de bits del segmento de host
 */
const bitsHostSpan = document.querySelector("#bits-host");

/**
 * Muestra la informacion general del problema
 *
 * @param {string} IP Direccion IP
 * @param {number} hosts Numero de hosts
 * @param {number} numSubNets Numero de Subredes
 * @param {number} numNetBits Numero de bits de red
 * @param {ClassInfo} classType Clase de la direccion IP
 */
export const showData = (IP, hosts, numSubNets, numNetBits, classType) => {
  // En las siguientes lineas insertamos dentro de los elementos SPAN la informacion recibida
  ipSpan.innerText = IP;
  hostsSpan.innerText = hosts;
  numSubnetSpan.innerText = numSubNets;
  bitsSubnetSpan.innerText = numNetBits;
  bitsHostSpan.innerText = classType.hostSection - numNetBits;
};

/**
 * @type {HTMLTableSectionElement} Referencia al elemento TBODY donde se muestra la informacion de las subredes calculadas
 */
const tbody = document.querySelector("tbody");

/**
 * Muestra la informacion de las subredes calculadas
 *
 * @param {any[]} table Arreglo de objetos, cada objeto contiene la informacion de la subred
 */
export const showTable = (table) => {
  let html = ""; // Inicializamos una variable la cual contendra el HTML de nuestra tabla de subredes

  tbody.textContent = ""; // Vaciamos el contenido actual de la tabla

  // Iteramos sobre la informacion de cada subred
  table.forEach((subnet) => {
    const subnetTR = `<tr>${Object.values(subnet) // Creamos un elemento TR (fila de tabla)
      .map((value) => `<td>${value}</td>`) // Creamos la celda de la tabla
      .join("")}</tr>`; // Concatenamos la informacion de la subred

    // Concatenamos la informacion de la subred con la de las anteriores subredes de la tabla
    html = html.concat(subnetTR);
  });

  tbody.insertAdjacentHTML("afterbegin", html); // Agregamos el HTML creado al elemento TBODY
};
