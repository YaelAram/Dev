import net from "node:net";

/**
 *
 * @param {number} desiredPort
 */
export const findPort = async (desiredPort) => {
  const server = net.createServer();
  let PORT = 0;

  server.listen(desiredPort, () => {
    const { port } = server.address();
    server.close(() => (PORT = port));
  });

  server.on("error", async (error) => {
    if (error.message === "EADDRINUSE") {
      const port = await findPort(0);
      PORT = port;
    } else throw new Error(error.message);
  });

  return PORT;
};
