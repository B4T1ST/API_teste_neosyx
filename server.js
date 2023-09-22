const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/', require('./cadastrosRoute'));

//const port = 3000;
app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});
