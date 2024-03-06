const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController")

// Definir rotas
route.get('/login', homeController.login);
  

module.exports = route