function Login(){
    this.eye = document.querySelector("#eye")
    this.password =  document.querySelector("#password")
}

Login.prototype.cliqueOlho = function(){
    this.eye.addEventListener("click", () => {
        if(this.eye.classList.contains("bi-eye-fill")){
            this.eye.classList.replace("bi-eye-fill", "bi-eye-slash-fill")
            this.password.setAttribute("type", "text")
        }else{
            this.eye.classList.replace("bi-eye-slash-fill", "bi-eye-fill")
            this.password.setAttribute("type", "password")
        }
    })
}

const eye = new Login
eye.cliqueOlho()