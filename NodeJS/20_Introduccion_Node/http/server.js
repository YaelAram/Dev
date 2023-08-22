import http from "node:http";

// al asignar el puerto cero automaticamente se asigna un puerto disponible
//const PORT = await findPort(8080);
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Response received");
  res.end("Hello World!");
});

// Con server.address().port obtenemos el puerto que nos fue asignado automaticamente
server.listen(PORT, () =>
  console.log(
    `Server listening at:\n\nhttp://localhost:${server.address().port}`
  )
);
