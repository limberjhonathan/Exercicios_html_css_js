class Login {
    constructor() {
        this.passwordIcon = document.querySelector("#password_icon");
        this.passwordInput = document.querySelector(".password");
    }

    clique = () => {
        this.passwordIcon.addEventListener("click", this.passwordVisible);
    }

    passwordVisible = () => {
        if (this.passwordIcon.classList.contains("bi-lock-fill")) {
            this.passwordIcon.classList.replace("bi-lock-fill", "bi-unlock-fill");
            this.passwordInput.setAttribute("type", "text");
        } else {
            this.passwordIcon.classList.replace("bi-unlock-fill", "bi-lock-fill");
            this.passwordInput.setAttribute("type", "password");
        }
    }
}

const login = new Login();
login.clique();
