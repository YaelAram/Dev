import {
  connectBtn,
  console,
  disconnectBtn,
  portStatus,
  sendBtn,
} from "../constants";
import { encode, showRead } from "../helpers";

let port = undefined;
let keepReading = false;
let reader = undefined;
let writer = undefined;
let closedPromise = undefined;

/**
 * Esta funcion se encarga de leer los datos que recibe la computadora del puerto serial
 *
 * @returns {Promise<void>}
 */
const readPort = async () => {
  if (!port) return; // Si el puerto aun no ha sido inicializado evitamos la ejecucion

  // Si el puerto puede leer y debe seguir leyendo entra en el bucle
  while (port.readable && keepReading) {
    reader = port.readable.getReader(); // Obtenemos el atributo para leer el puerto
    console.log("Reading..."); // Mostramos un mensaje en consola indicando que se inicio a leer el puerto

    try {
      // Iniciamos la lectura indefinida
      while (true) {
        // Leemos el puerto, value contiene el valor leido y done indica si el flujo de lectura ha sido cerrado
        const { value, done } = await reader.read();

        if (done) break; // Si done es verdadero salimos del bucle WHILE y entramos en el bloque FINALLY
        if (value) showRead(value); // Si el valor no es null o undefined mostramos la informacion recibida
      }
    } catch (error) {
      console.error(error); // Mostramos el error por consola
    } finally {
      reader.releaseLock(); // Liberamos el lector del puerto
    }
  }

  /*
    Al salir del bucle significa que el usuario inicio el proceso para cerrar la conexion al puerto,
    mostramos un mensaje por consola
  */
  console.log("Closing...");
  await port.close(); // Cerramos el puerto
};

/**
 * Esta funcion siver para terminar la conexión con el puerto
 *
 * @returns {Promise<void>}
 */
export const handleDisconnect = async () => {
  keepReading = false; // Cambiar a false para salir del bucle WHILE

  // Cerramos los flujos de lectura y escritura
  writer.releaseLock();
  reader.cancel();
  await closedPromise;

  // Mostramos al usuario el nuestro estatus del puerto
  portStatus.innerText = "Desconectado";

  // Ya no hay una conexión activa
  connectBtn.disabled = false; // Habilitamos el boton "Conectar"
  disconnectBtn.disabled = true; // Deshabilitamos el boton "Desconectar"
  sendBtn.disabled = true; // Deshabilitamos el para enviar mensajes al puerto serie
};

/**
 * Esta funcion siver para iniciar la conexión con el puerto serie seleccionado por el usuario
 *
 * @returns {Promise<void>}
 */
export const handleConnect = async () => {
  try {
    // Preguntamos al usuario por el puerto serie al que desea conectarse
    port = await navigator.serial.requestPort();
    portStatus.innerText = "Conectado"; // Cambiamos el estado de conexión al puerto

    await port.open({ baudRate: 9600 }); // Abrimos el puerto seleccionado y configuramos 9600 baudios

    writer = port.writable.getWriter(); // Obtenemos el atributo para escribir en el puerto
    // Iniciamos la lectura indefinida del puerto
    keepReading = true;
    closedPromise = readPort();

    // Hay una conexion activa
    connectBtn.disabled = true; // Deshabilidamos el boton de "Conectar"
    disconnectBtn.disabled = false; // Habilitamos el boton para desconectar la aplicacion del puerto
    sendBtn.disabled = false; // Habilitamos el boton para enviar mensajes al puerto serie
  } catch (error) {
    portStatus.innerText = "Error al Conectar"; // Mostramos al usuario que hubo un error al conectar
    console.error(error.message); // Imprimimos por consola el error para obtener más detalles
  }
};

/**
 * Esta funcion permite enviar la informacion que el usuario ingreso al puerto serie
 *
 * @param {SubmitEvent} evt
 */
export const handleWrite = (evt) => {
  // Evitamos el comportamiento por defecto del formulario (recargar la pagina)
  evt.preventDefault();

  // Obtenemos la informacion del formulario
  const { data } = Object.fromEntries(new FormData(evt.target).entries());
  // Codificamos la informacion
  const encodedData = encode(data);

  // Enviamos la informacion al puerto serie
  writer.write(encodedData);
};
