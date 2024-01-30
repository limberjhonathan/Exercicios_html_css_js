function Click() {
    // Função para iniciar a aplicação
    this.inicio = () => {
        this.capturaEventos();
    }

    // Função para capturar eventos de teclado e clique
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

    // Função para limpar a mensagem de erro
    this.limparMensagemErro = (span, elemento) => {
        span.style.opacity = '0';
        this.removerEstiloErro(elemento);
    }

    // Função para adicionar estilo de erro a um elemento
    this.adicionarEstiloErro = (elemento) => {
        elemento.style.outline = "2px solid red";
    }

    // Função para validar o formato de e-mail
    this.validacaoEmail = (email) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    // Função para verificar igualdade entre dois e-mails
    this.verificarIgualdade = (email1, email2) => {
        return email1 === email2;
    }

    // Função para exibir alerta com mensagem
    this.exibirAlerta = (mensagem) => {
        alert(mensagem);
    }

    // Função principal para verificar e-mails
    this.verificarEmail = () => {
        const email1 = document.querySelector("#email1");
        const email2 = document.querySelector("#email2");
        const text_spans = document.querySelectorAll(".span-text");

        // Adiciona eventos de foco para limpar mensagens de erro
        email1.addEventListener("focus", () => this.limparMensagemErro(text_spans[0], email1));
        email2.addEventListener("focus", () => this.limparMensagemErro(text_spans[1], email2));

        if (!email1.value.trim() && !email2.value.trim()) {
            // Se ambos os campos estão vazios, exibe mensagens de erro
            text_spans.forEach((span) => span.style.opacity = "1");
            this.adicionarEstiloErro(email1);
            this.adicionarEstiloErro(email2);
        } else {
            text_spans.forEach((span) => span.style.opacity = "0");

            const validacaoEmail1 = this.validacaoEmail(email1.value);
            const validacaoEmail2 = this.validacaoEmail(email2.value);

            if (validacaoEmail1 && validacaoEmail2) {
                // Se os e-mails são válidos
                if (this.verificarIgualdade(email1.value, email2.value)) {
                    // this.exibirAlerta("Os e-mails são iguais");
                } else {
                    text_spans[1].textContent = "Os e-mails não coincidem";
                    text_spans[1].style.opacity = "1";
                }
            }

            if (!validacaoEmail1) {
                // Se o primeiro e-mail não é válido, exibe mensagem de erro
                this.adicionarEstiloErro(email1);
                text_spans[0].style.opacity = '1';
            }

            if (!validacaoEmail2) {
                // Se o segundo e-mail não é válido, exibe mensagem de erro
                this.adicionarEstiloErro(email2);
                text_spans[1].textContent = text_spans[0].textContent;
                text_spans[1].style.opacity = '1';
            }
        }
    }

    // Função para remover estilo de erro de um elemento
    this.removerEstiloErro = (elemento) => {
        elemento.style.outline = "";
    }
}

// Instância da classe Click
const click = new Click();
// Inicia a aplicação
click.inicio();
