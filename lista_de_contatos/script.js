function Cadastro() {
    // Inicializa a aplicação
    this.inicio = () => {
        this.detectarClick();
        this.capturaEnter();
    }

    // Adiciona o evento para a tecla "Enter"
    this.capturaEnter = () => {
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.adicionarContato();
            }
        });
    };

    // Configura os eventos de clique e foco nos inputs
    this.detectarClick = () => {
        this.btn = document.querySelector(".btn");
        this.nameInput = document.querySelector(".nome");
        this.numberInput = document.querySelector(".number");
        this.tabela = document.querySelector(".tabela");

        this.btn.addEventListener("click", () => {
            this.adicionarContato();
        });

        this.nameInput.addEventListener('focus', () => {
            this.removerDestaqueVermelho(this.nameInput);
        });

        this.numberInput.addEventListener('focus', () => {
            this.removerDestaqueVermelho(this.numberInput);
        });

        this.numberInput.addEventListener('input', () => {
            this.formatarNumero();
        });
    }

    // Adiciona um novo contato à tabela
    this.adicionarContato = () => {
        const nome = this.nameInput.value.trim();
        const numero = this.numberInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        
        if (!nome && !numero){
            this.destacarCampoVermelho(this.nameInput)
            this.destacarCampoVermelho(this.numberInput)
        }

        if (!nome) {
            this.destacarCampoVermelho(this.nameInput);
            this.mostrarMensagem('Por favor, insira um nome válido.', 'error');
            return;
        }
    
        if (!/^\d+$/.test(numero)) {
            this.destacarCampoVermelho(this.numberInput);
            this.mostrarMensagem('Por favor, insira um número de telefone válido (apenas números).', 'error');
            return;
        }
    
        // Cria novos elementos para a tabela
        const newTr = document.createElement("tr");
        const newTd1 = document.createElement("td");
        newTd1.textContent = nome;
        const newTd2 = document.createElement("td");
        newTd2.textContent = this.formatarNumeroExibicao(numero); // Formatando o número para exibição
        const newTd3 = document.createElement("td");
        const newDelete = document.createElement("button");
        newDelete.setAttribute("class", "delete");
        newDelete.textContent = "Deletar";
    
        // Adiciona evento para deletar o contato
        newDelete.addEventListener("click", () => {
            this.deletarContato(newTr);
        });
    
        newTd3.appendChild(newDelete);
        newTr.append(newTd1, newTd2, newTd3);
        this.tabela.appendChild(newTr);
    
        // Limpa os campos e fornece feedback ao usuário
        this.limparCampos();
        this.mostrarMensagem('Contato adicionado com sucesso!', 'success');
        this.nameInput.focus();
    }

    // Limpa os campos de input
    this.limparCampos = () => {
        this.nameInput.value = '';
        this.numberInput.value = '';
    }

    // Deleta um contato da tabela
    this.deletarContato = (row) => {
        // Implemente sua lógica de exclusão aqui
        row.remove();
        this.mostrarMensagem('Contato removido com sucesso!', 'success');
    }

    // Exibe uma mensagem no console (pode ser adaptado para exibir em outro local)
    this.mostrarMensagem = (mensagem, tipo) => {
        console.log(`${tipo.toUpperCase()}: ${mensagem}`);
    }

    // Destaca um campo com a cor vermelha
    this.destacarCampoVermelho = (campo) => {
        campo.style.outline = "2px solid red";
        campo.style.boxShadow = "0 0 5px 2px red";
    }

    // Remove o destaque vermelho de um campo
    this.removerDestaqueVermelho = (campo) => {
        campo.style.outline = "";
        campo.style.boxShadow = "";
    }

    // Formata o número de telefone durante a digitação
    this.formatarNumero = () => {
        let numero = this.numberInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos

        // Limita a 13 dígitos
        numero = numero.substring(0, 13);

        // Adiciona a formatação (55) 11 xxxxxxxxx
        let formattedNumber = '';
        for (let i = 0; i < numero.length; i++) {
            if (i === 0) {
                formattedNumber += '(' + numero[i];
            } else if (i === 2) {
                formattedNumber += ') ' + numero[i];
            } else if (i === 4) {
                formattedNumber += ' ' + numero[i];
            } else {
                formattedNumber += numero[i];
            }
        }

        this.numberInput.value = formattedNumber;
    }

    this.formatarNumeroExibicao = (numero) => {
        // Adiciona a formatação (11) 9xxxx-xxxx
        return `(${numero.substring(0, 2)}) ${numero.substring(2, 3)}${numero.substring(3, 7)}-${numero.substring(7)}`;
    }
}

const inicio = new Cadastro();
inicio.inicio();
