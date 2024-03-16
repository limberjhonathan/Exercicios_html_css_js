const Login = require('../models/loginModel')

exports.indexLogin = (req, res) => {
    req.session.loginError = null;
    req.session.loginInsistent = false;
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
    try{
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
    }catch(e){
        req.session.loginInsistent = true;
        req.session.save(function(){
            return res.redirect("/login")
        })
        // res.send("Credenciais inválidas")
    }
}