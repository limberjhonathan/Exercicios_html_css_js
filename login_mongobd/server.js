require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const routes = require("./routes");
const { checkPageExistence, errorHandler, csrfMiddleware, middlewareGlobal} = require("./src/middlewares/middlewares");
const csrf = require('csurf');
const flash = require('connect-flash');

// Conexão com o MongoDB
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto');
  })
  .catch(error => console.error(error));

// Middleware para análise de dados do corpo da requisição
app.use(express.urlencoded({ extended: true }));

// Configuração dos arquivos estáticos
app.use(express.static(path.resolve(__dirname, "public")));

// Configuração da sessão
const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);

// Configuração do mecanismo de visualização e diretório de visualizações
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(flash());

//csrf
app.use(csrf())

app.use(middlewareGlobal)
app.use(csrfMiddleware)
// Rotas
app.use(routes);

// Middleware de verificação de existência de página e manipulação de erros
app.use(checkPageExistence);
app.use(errorHandler);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
