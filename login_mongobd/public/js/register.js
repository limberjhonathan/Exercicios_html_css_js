class RegisterPassword {
    constructor() {
        this.passwordIcon = document.querySelector("#password_icon");
        this.repeatPasswordIcon = document.querySelector("#repeat_password_icon");
        this.passwordInputs = document.querySelectorAll(".password");
    }

    clique = () => {
        this.passwordIcon.addEventListener("click", this.passwordVisible);
        this.repeatPasswordIcon.addEventListener("click", this.repeatPasswordVisible);
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
}

const registerpass = new RegisterPassword
registerpass.clique()
