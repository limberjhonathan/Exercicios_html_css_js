const express = require('express');
const app = express();
const path = require('path');

//arquivos estatico
app.use(express.static(path.resolve(__dirname, "public")));

// Configurar o mecanismo de visualização e o diretório de visualizações
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Definir rotas
app.get('/', (req, res) => {
  res.render('login', { title: 'Login' });
});


// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
