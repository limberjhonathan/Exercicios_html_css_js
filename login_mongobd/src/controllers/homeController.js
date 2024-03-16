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
    return res.redirect('/login')
}

exports.login = async (req, res) => {
    try{
        const login = new Login(req.body)
        await login.login()
        if(login.error.length > 0){
            req.flash('error', login.error);
            console.log(login.error)
            req.session.save(function(){
                return res.redirect('/login')
            });
            return
        }
        req.session.user = login.user
        console.log("pasei por aqui")
        req.session.save(function(){
            return res.send("logado com: " + login.user.nome)
        });
    }catch(e){
        console.log("deu erro")
        return res.render('404')
    }
}