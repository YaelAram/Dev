import path from "node:path";

/**
 * Sirve para crear rutas del arbol de directorios
 */

console.log(path.sep); // Imprimer el separador segun el SO ('/' Unix, '\' Windows)

// Contruir la ruta: context/files/test.txt
const pathFile = path.join("context", "files", "test.txt");
console.log(pathFile);

// Obtener el nombre de un archivo a partir de un ruta
const baseName = path.basename(pathFile);
console.log(baseName);

// Obtener el nombre de un archivo a partir de un ruta sin su extension
const name = path.basename(pathFile, ".txt");
console.log(name);

// Obtener la extension de un archivo a partir de un ruta
const extension = path.extname(pathFile);
console.log(extension);
