class Eye {
    constructor() {
        this.eye = document.querySelector("#eye");
        this.pass = document.querySelector("#password");
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
        this.eye.addEventListener("click", this.togglePasswordVisibility);
    }

    togglePasswordVisibility() {
        if (this.eye.classList.contains("bi-eye-fill")) {
            this.eye.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
            this.pass.type = "text";
        } else {
            this.pass.type = "password";
            this.eye.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
        }
    }
}

const eyeInstance = new Eye();
