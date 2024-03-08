const express = require('express');
const app = express();
const path = require('path');
const routes = require("./routes");
const { checkPageExistence, errorHandler } = require("./src/middlewares/middlewares");

// Configuração dos arquivos estáticos
app.use(express.static(path.resolve(__dirname, "public")));

// Configurar o mecanismo de visualização e o diretório de visualizações
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


// Rotas
app.use(routes);

app.use(checkPageExistence)
app.use(errorHandler)

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
