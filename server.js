// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');
const dbConfig = require('./dbconfig');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors()); // Configure o CORS, se necessário

// Configuração da rota para adicionar um novo cadastro
app.post('/api/cadastros', async (req, res) => {
  const { atividade, descricao, pontos } = req.body;

  try {
    const pool = await sql.connect(dbConfig);

    const request = pool.request();
    request.input('Atividade', sql.NVarChar(255), atividade);
    request.input('Descricao', sql.NVarChar(255), descricao);
    request.input('Pontos', sql.Int, pontos);

    const result = await request.query(`
      INSERT INTO Cadastros (Atividade, Descricao, Pontos)
      VALUES (@Atividade, @Descricao, @Pontos)
    `);

    res.status(201).json(result);
  } catch (error) {
    console.error('Erro ao adicionar cadastro:', error);
    res.status(500).json({ error: 'Erro ao adicionar cadastro' });
  } finally {
    sql.close();
  }
});

app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});
