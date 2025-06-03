const http = require('http');
const express = require('express');

const PORT = process.env.NODE_ENV ?? 5000;

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Ok');
});

app.get('/users/4', (req, res) => {
  res.status(200).send({ name: 'Test' });
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
