const Login = require('../models/loginModel')

exports.indexLogin = (req, res) => {
    res.render('login', { title: 'Login' });
}

exports.indexRegister = (req, res) => {
    res.render('register', { title: 'Register'})
}

exports.register = (req, res) => {
    const login = new Login(req.body)
    login.register()
}