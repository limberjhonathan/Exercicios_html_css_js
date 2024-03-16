const mongoose = require('mongoose');
const bcrypyjs = require("bcryptjs");

const LoginSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);


class Login {
    constructor(body){
        this.body = body;
        this.error = [];
        this.user = null;
    }

    async login() {
        if(this.error.length > 0) return
        this.user = await LoginModel.findOne({email: this.body.email})

        if(!this.user){
            this.error.push("Usário não existe")
            return
        }

        if(!bcrypyjs.compareSync(this.body.password, this.user.password)){
            this.error.push("Senha Invalida");
            this.user = null
            return
        }


    }

    async register(){
        this.valida()
        if(this.error.length > 0) return
        await this.userExists()

        const salt = bcrypyjs.genSaltSync();
        this.body.password = bcrypyjs.hashSync(this.body.password, salt)

        this.user = await LoginModel.create(this.body)
    }

    async userExists() {
        this.user = await LoginModel.findOne({email: this.body.email})
        if(this.user) this.error.push("Usuario Já existe.");

    }

    valida(){
        this.cleanUp()
    }

    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
              this.body[key] = '';
            }
          }
      
          this.body = {
            nome: this.body.username,
            email: this.body.email,
            password: this.body.password,
          }
    }

}

module.exports = Login;