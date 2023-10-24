import { DelimiterParser } from "@serialport/parser-delimiter";
import { SerialPort } from "serialport";

const port = new SerialPort({ path: "COM3", baudRate: 9600 });
const parser = port.pipe(new DelimiterParser({ delimiter: "\n\r" }));

port.on("open", () => {
  console.log("Serial Port Open");
});

// parser.setEncoding("ascii"); // Cambiar formado de codificacion (Leer) Default: UTF-8 (Compatible con ASCII)
parser.on("data", console.log); // Leer

// port.setDefaultEncoding("ascii"); // Cmabiar el formato de codificacion (Escribir) Default: UTF-8 (Compatible con ASCII)
// port.write('ROBOT POWER ON') // Escribir
