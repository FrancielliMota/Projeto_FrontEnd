const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'index.html'));
});

// Rota universal para URLs não especificadas
app.get('/:universalURL', (req, res) => {
    res.send('404 URL NOT FOUND');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
