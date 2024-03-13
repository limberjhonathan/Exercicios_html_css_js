const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Login', LoginSchema);


class Login {
    constructor(body){
        this.body = body;
        this.error = [];
        this.user = null;
    }

    register(){
        this.valida()
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
            repeatPassword: this.body.repeatPassword,
          }

          console.log(this.body)
    }

}

module.exports = Login;