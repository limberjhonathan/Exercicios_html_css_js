const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController")

// Definir rotas
route.get('/login', homeController.indexLogin);
route.get('/register', homeController.indexRegister)
route.post('/register/register', homeController.register)
route.post('/login/login', homeController.login);
  

module.exports = route