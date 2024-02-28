class Eye {
  constructor() {
    this.eye = document.querySelector("#eye");
    this.pass = document.querySelector("#password");
    this.labels = document.querySelectorAll("label");
    this.title = document.querySelector(".title-login");
    this.container = document.querySelector(".container");
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    this.eye.addEventListener("click", this.togglePasswordVisibility);
  }

  toggleWhite() {
    this.labels.forEach(label => {
      label.style.color = "#fff";
    });
    this.title.style.color = "#fff";
    this.container.style.border = "1px solid #fff";
  }

  toggleBlack() {
    this.labels.forEach(label => {
      label.style.color = "black";
    });
    this.title.style.color = "black";
    this.container.style.border = "1px solid black";
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

class DarkModeButton {
  constructor() {
    this.body = document.body;
    this.btn = document.querySelector('.btn');
    this.icon = document.querySelector('.btn__icon');
    this.eye = new Eye();
    this.loadDarkMode();
    this.addEventListeners();
  }

  storeDarkMode(value) {
    localStorage.setItem('darkmode', value);
  }

  loadDarkMode() {
    const darkmode = localStorage.getItem('darkmode');
    if (!darkmode) {
      this.storeDarkMode(false);
      this.icon.classList.add('fa-sun');
    } else if (darkmode === 'true') {
      this.body.classList.add('darkmode');
      this.eye.toggleWhite(); // Aqui chama o método da classe Eye para alternar para branco
      this.icon.classList.add('fa-moon');
    } else if (darkmode === 'false') {
      this.eye.toggleBlack(); // Aqui chama o método da classe Eye para alternar para preto
      this.icon.classList.add('fa-sun');
    }
  }

  addEventListeners() {
    this.btn.addEventListener('click', () => {
      this.body.classList.toggle('darkmode');
      this.icon.classList.add('animated');
      this.storeDarkMode(this.body.classList.contains('darkmode'));
      if (this.body.classList.contains('darkmode')) {
        console.log("Escuro");
        this.eye.toggleWhite(); // Aqui chama o método da classe Eye para alternar para branco
        this.icon.classList.remove('fa-sun');
        this.icon.classList.add('fa-moon');
      } else {
        console.log("Claro");
        this.eye.toggleBlack(); // Aqui chama o método da classe Eye para alternar para preto
        this.icon.classList.remove('fa-moon');
        this.icon.classList.add('fa-sun');
      }
      setTimeout(() => {
        this.icon.classList.remove('animated');
      }, 500);
    });
  }
}

new DarkModeButton();
