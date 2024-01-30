function Click() {
    this.inicio = () => {
        this.capturaEventos();
    }

    this.capturaEventos = () => {
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.verificarEmail();
            } else {
                this.removerVerificado();
            }
        });

        const btn = document.querySelector(".btn");
        btn.addEventListener("click", () => {
            this.verificarEmail();
        });
    };

    this.limparMensagemErro = (span, elemento) => {
        span.style.opacity = '0';
        this.removerEstiloErro(elemento);
    }

    this.adicionarEstiloErro = (elemento) => {
        elemento.style.outline = "2px solid red";
    }

    this.validacaoEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    this.verificarIgualdade = (email1, email2) => email1 === email2;

    this.exibirAlerta = (mensagem) => alert(mensagem);

    this.colocarVerificado = (elemento1, elemento2) => {
        const container = document.querySelector(".container");
        container.style.outline = "3px solid rgb(76, 230, 5)";
        [elemento1, elemento2].forEach((el) => el.style.outline = "4px solid green");
    }

    this.removerVerificado = () => {
        const container = document.querySelector(".container");
        ["#email1", "#email2"].forEach((selector) => {
            const element = document.querySelector(selector);
            element.style.outline = "";
        });
        container.style.outline = "";
    }

    this.verificarEmail = () => {
        const email1 = document.querySelector("#email1");
        const email2 = document.querySelector("#email2");
        const text_spans = document.querySelectorAll(".span-text");

        ["#email1", "#email2"].forEach((selector, index) => {
            const email = document.querySelector(selector);
            email.addEventListener("focus", () => this.limparMensagemErro(text_spans[index], email));
        });

        if (!email1.value.trim() && !email2.value.trim()) {
            text_spans.forEach((span) => span.style.opacity = "1");
            ["#email1", "#email2"].forEach((selector) => this.adicionarEstiloErro(document.querySelector(selector)));
        } else {
            text_spans.forEach((span) => span.style.opacity = "0");

            const validacaoEmail1 = this.validacaoEmail(email1.value);
            const validacaoEmail2 = this.validacaoEmail(email2.value);

            if (validacaoEmail1 && validacaoEmail2) {
                if (this.verificarIgualdade(email1.value, email2.value)) {
                    this.colocarVerificado(email1, email2);
                } else {
                    text_spans[1].textContent = "Os e-mails não coincidem";
                    text_spans[1].style.opacity = "1";
                }
            }

            [email1, email2].forEach((email, index) => {
                if (!this.validacaoEmail(email.value)) {
                    this.adicionarEstiloErro(email);
                    text_spans[index].style.opacity = '1';
                }
            });
        }
    }

    this.removerEstiloErro = (elemento) => {
        elemento.style.outline = "";
    }
}

const click = new Click();
click.inicio();
