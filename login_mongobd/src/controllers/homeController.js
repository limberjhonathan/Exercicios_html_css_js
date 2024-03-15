const Login = require('../models/loginModel')

exports.indexLogin = (req, res) => {
    req.session.loginError = null;
    res.render('login', { title: 'Login' });
}

exports.indexRegister = (req, res) => {
    res.render('register', { title: 'Register'})
}

exports.register = (req, res) => {
    const login = new Login(req.body)
    login.register()
    return res.redirect('/login')
}

exports.login = async (req, res) => {
    const login = new Login(req.body)
    await login.login()
    req.session.user = login.user

    if (login.user) {
        res.send("logado")
    } else {
        // Define loginError na sessão
        req.session.loginError = true;
        req.session.save(function(){
            return res.redirect('/login');
        });
    }
}