const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Porta que pode ser configurada através de uma variável de ambiente ou padrão 3000

// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo à página inicial!');
});

// Rota de exemplo
app.get('/api/exemplo', (req, res) => {
  res.json({ mensagem: 'Esta é uma rota de exemplo' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});