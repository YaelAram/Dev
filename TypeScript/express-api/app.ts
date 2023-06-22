import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.status(400).json({
    ok: false,
    msg: 'Token is required'
  });
});

app.listen(PORT, () => console.log(`Listening at  http://localhost:${PORT}`));
