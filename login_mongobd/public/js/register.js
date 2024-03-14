class RegisterPassword {
    constructor() {
        this.passwordIcon = document.querySelector("#password_icon");
        this.repeatPasswordIcon = document.querySelector("#repeat_password_icon");
        this.passwordInputs = document.querySelectorAll(".password");
        this.registerForm = document.querySelector(".registerForm");
        this.span = document.querySelector(".span");
    }

    clique = () => {
        this.passwordIcon.addEventListener("click", this.passwordVisible);
        this.repeatPasswordIcon.addEventListener("click", this.repeatPasswordVisible);
        this.registerForm.addEventListener("submit", this.comparePassword)
        this.passwordInputs.forEach(input => {
            input.addEventListener('mousedown', this.inputPadlock)
        })
    }

    passwordVisible = () => {
        if (this.passwordIcon.classList.contains("bi-lock-fill")) {
            this.passwordIcon.classList.replace("bi-lock-fill", "bi-unlock-fill");
            this.passwordInputs[0].setAttribute("type", "text");
        } else {
            this.passwordIcon.classList.replace("bi-unlock-fill", "bi-lock-fill");
            this.passwordInputs[0].setAttribute("type", "password");
        }
    }

    repeatPasswordVisible = () => {
        if (this.repeatPasswordIcon.classList.contains("bi-lock-fill")) {
            this.repeatPasswordIcon.classList.replace("bi-lock-fill", "bi-unlock-fill");
            this.passwordInputs[1].setAttribute("type", "text");
        } else {
            this.repeatPasswordIcon.classList.replace("bi-unlock-fill", "bi-lock-fill");
            this.passwordInputs[1].setAttribute("type", "password");
        }
    }

    comparePassword = (event) => {
        if (this.passwordInputs[0].value !== this.passwordInputs[1].value){
            this.passwordInputs[0].style.border = '2px solid red'
            this.passwordInputs[1].style.border = '2px solid red'
            this.span.style.display = 'block'
            event.preventDefault();
        }else{
            this.passwordInputs[0].style.border = '2px solid greenyellow';
            this.passwordInputs[1].style.border = '2px solid greenyellow';
            this.span.style.display = 'none'
        }
    }

    inputPadlock = (event) => {
        const clickedInput = event.target;
        if (clickedInput.id === "password1") {
            if(this.repeatPasswordIcon.classList.contains('bi-unlock-fill')){
                this.repeatPasswordIcon.classList.replace('bi-unlock-fill', 'bi-lock-fill')
                this.passwordInputs[1].setAttribute('type', 'password');
                
            }
        } else if (clickedInput.id === "password2") {
            if(this.passwordIcon.classList.contains('bi-unlock-fill')){
                this.passwordIcon.classList.replace('bi-unlock-fill', 'bi-lock-fill')
                this.passwordInputs[0].setAttribute('type', 'password')
            }
        }
    }
    
}

const registerpass = new RegisterPassword
registerpass.clique()
