import { connectBtn, disconnectBtn } from "./constants";
import { handleConnect, handleDisconnect, handleWrite } from "./handlers";

import "./style.css";

// Agregamos el evento click al boton "Desconectar"
disconnectBtn.addEventListener("click", handleDisconnect);

// Agregamos el evento click al boton "Conectar"
connectBtn.addEventListener("click", handleConnect);

// Agregamos el evento submit al formulario
document.querySelector("form").addEventListener("submit", handleWrite);
