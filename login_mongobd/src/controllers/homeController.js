const { async } = require("regenerator-runtime");

exports.indexLogin = (req, res) => {
    res.render('login', { title: 'Login' });
}

exports.indexRegister = (req, res) => {
    res.render('register', { title: 'Register'})
}

exports.register = (req, res) => {
    console.log("passei no post")
    res.send(req.body);
    console.log(req.body);
}