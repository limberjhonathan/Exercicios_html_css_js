const mongoose = require('mongoose');

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

    async register(){
        this.valida()
        if(this.error.length > 0) return
        await this.userExists()

    }

    async userExists() {
        this.user = await LoginModel.findOne({email: this.body.email})
        if(this.user) this.error.push("Usuario Já existe.");

        this.user = await LoginModel.create(this.body)
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

          console.log(this.body)
    }

}

module.exports = Login;