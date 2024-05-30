const mysql = require('mysql2');

// Crie a conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: '123456',
    database: 'sigmaia',
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como ID', connection.threadId);
});

module.exports = connection;
