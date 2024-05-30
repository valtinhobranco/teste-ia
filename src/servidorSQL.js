const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./login');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/api', loginRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
