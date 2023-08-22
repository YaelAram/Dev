import fs from "node:fs/promises";

/**
 * Utilizando readFileSync es un proceso sincrono
 * Utilizando las promesas por separada con await es asincrono secuencial
 * Utilizando el Promise.all es un proceso asincrono en paralelo, ambos archivos se leen en paralelo
 */

const files = [
  await fs.readFile("./test.txt", "utf-8"),
  await fs.readFile("./test2.txt", "utf-8"),
];
const texts = await Promise.all(files);

console.log("Haciendo otras cosas...");

console.log(texts[0]);
console.log(texts[1]);
