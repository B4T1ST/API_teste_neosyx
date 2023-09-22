const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('./config');
const connection = require('./config/' + config.banco)

// Rota para adicionar um novo cadastro
router.post('/cadastros', async (req, res) => {
  const {Atividade, Descricao, Pontos} = req.body;

  try {
    const pool = await sql.connect(connection);

    const request = pool.request();
    request.input('Atividade', sql.NVarChar(255), Atividade);
    request.input('Descricao', sql.NVarChar(255), Descricao);
    request.input('Pontos', sql.Int, Pontos);

    const result = await request.query(`
      INSERT INTO Cadastros (Atividade, Descricao, Pontos)
      VALUES (@Atividade, @Descricao, @Pontos)
    `);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar cadastro' });
  } 
  
});

module.exports = router;
