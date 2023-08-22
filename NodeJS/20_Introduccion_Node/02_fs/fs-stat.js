import fs from "node:fs";

const stats = fs.statSync("./test.txt");

console.log(`Es un archivo: ${stats.isFile()}`);
console.log(`Es un directorio: ${stats.isDirectory()}`);
console.log(`Tamaño: ${stats.size}`);
