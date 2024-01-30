function Click() {
    this.inicio = () => {
        this.capturaEventos();
    }

    this.capturaEventos = () => {
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.verificarEmail();
            }
        });

        const btn = document.querySelector(".btn");
        btn.addEventListener("click", () => {
            this.verificarEmail();
        });
    };

    this.verificarEmail = () => {
        const email1 = document.querySelector("#email1");
        const email2 = document.querySelector("#email2");
        const text_spans = document.querySelectorAll(".span-text");

        email1.addEventListener("focus", () => this.limparMensagemErro(text_spans[0], email1));
        email2.addEventListener("focus", () => this.limparMensagemErro(text_spans[1], email2));

        if (!email1.value.trim() && !email2.value.trim()) {
            text_spans.forEach((span) => span.style.opacity = "1");
            this.adicionarEstiloErro(email1);
            this.adicionarEstiloErro(email2);
        } else {
            text_spans.forEach((span) => span.style.opacity = "0");
        }
    }

    this.validacaoEmail = (email) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    this.adicionarEstiloErro = (elemento) => {
        elemento.style.outline = "2px solid red";
    }

    this.limparMensagemErro = (span, elemento) => {
        span.style.opacity = '0';
        this.removerEstiloErro(elemento);
    }

    this.removerEstiloErro = (elemento) => {
        elemento.style.outline = "";
    }
}

const click = new Click();
click.inicio();
