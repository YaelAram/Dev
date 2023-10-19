import { fromHost, fromSubnet } from "./helpers";
import "./style.css";

/**
 * Esta funcion permite manejar el evento SUBMIT sobre el formulario de la pagina
 *
 * @param {SubmitEvent} evt EVT contiene el evento tipo SubmitEvent
 */
const handleSubmit = (evt) => {
  evt.preventDefault(); // Evitamos el comportamiento por defecto de un formulario

  /*
    Obtenemos el numero de subredes o hosts requeridos, la IP a usar y el tipo de problema (si el problema busca
    un numero de subredes o busca un numero de hosts)
  */
  const { total, ip, type } = Object.fromEntries(
    new FormData(evt.target).entries()
  );

  const firstSection = Number(ip.split(".").at(0)); // Obtenemos el primer numero/segmento de la IP
  /*
    Se detiene la operacion si:
      - El primer segmento es un numero negativo (una IP no contiene numeros negativos)
      - El primer segmento es un numero mayor o igual a 224 (la clase D y E no son soportadas por la aplicacion)
  */
  if (firstSection < 0 || firstSection >= 224) return;

  if (type === "subnet")
    fromSubnet(+total, ip); // Claculamos a partir del numero de subredes
  else fromHost(+total, ip); // Claculamos a partir del numero de hosts
};

// Adjuntamos al formulario nuestra funcion para manejar el evento Submit
document.querySelector("form").addEventListener("submit", handleSubmit);
