import os from "node:os";

console.log(`Sistema Operativo: ${os.hostname()}`);
console.log(`Version: ${os.release()}`);
console.log(`Arquitectura: ${os.arch()}`);
console.log(`Memoria Total: ${os.totalmem() / 1024 / 1024} MB`);
console.log(`Memoria Libre: ${os.freemem() / 1024 / 1024} MB`);
