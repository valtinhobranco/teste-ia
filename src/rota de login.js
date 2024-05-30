const express = require('express');
const router = express.Router();
const connection = require('./db');
const bcrypt = require('bcrypt');

// Endpoint de login
router.post('/login', (req, res) => {
  const { nome_usuario, senha } = req.body;

  // Verificar se o usuário existe
  connection.query('SELECT * FROM usuarios WHERE nome_usuario = ?', [nome_usuario], (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.status(401).send('Usuário não encontrado');
    }

    const user = results[0];

    // Verificar a senha
    bcrypt.compare(senha, user.senha, (err, isMatch) => {
      if (err) throw err;

      if (isMatch) {
        res.send('Login bem-sucedido');
      } else {
        res.status(401).send('Senha incorreta');
      }
    });
  });
});

module.exports = router;
