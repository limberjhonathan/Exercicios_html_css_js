require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

const path = require('path');
const routes = require("./routes");
const { checkPageExistence, errorHandler } = require("./src/middlewares/middlewares");

const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(express.urlencoded({ extended: true }));

// Configuração dos arquivos estáticos
app.use(express.static(path.resolve(__dirname, "public")));

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

// Configurar o mecanismo de visualização e o diretório de visualizações
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


// Rotas
app.use(routes);

//middleware
app.use(checkPageExistence)
app.use(errorHandler)

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
