import express from "express";
import dns from "node:dns";

const PORT = 8080;
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const { url } = req.body;

  dns.lookup(url, { family: 4 }, (error, address) => {
    if (error)
      return res.status(400).json({
        ok: false,
        error,
        msg: "Enviar direccion de la pagina web (la que creamos nosotros)",
      });

    return res.status(200).json({ url: `https://${url}`, address });
  });
});

app.listen(PORT, () =>
  console.log(`Listening at:\n\nhttp://localhost:${PORT}`)
);
