function Cpf() {
    const cpfInput = document.querySelector(".inputCpf");
    const container = document.querySelector(".container");
    const textspan = document.querySelector(".textSpan")
    const btn = document.querySelector('.btn');
    let boolVerificado = false;

    this.iniciar = () => {
        this.adicionarEventos();
        this.capturaClick();
    };


    this.capturaClick = () => {
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.verificadorCpf();
            } else if (e.key === 'Backspace') {
                this.removerVerificado();
            }
        });
    };

    this.adicionarEventos = () => {
        document.querySelector(".btn").addEventListener("click", this.verificadorCpf);
        cpfInput.addEventListener("input", this.formatarCpf);
    };

    this.formatarCpf = () => {
        let cpfValue = cpfInput.value.replace(/\D/g, '');
        cpfValue = cpfValue.slice(0, 11);

        const formattedNumberCpf = this.formatarNumeroCpf(cpfValue);
        cpfInput.value = formattedNumberCpf;
    };

    this.formatarNumeroCpf = (cpfValue) => {
        let formattedNumberCpf = '';
        for (let i = 0; i < cpfValue.length; i++) {
            if (i === 3 || i === 6) {
                formattedNumberCpf += '.' + cpfValue[i];
            } else if (i === 9) {
                formattedNumberCpf += '-' + cpfValue[i];
            } else {
                formattedNumberCpf += cpfValue[i];
            }
        }
        return formattedNumberCpf;
    };

    this.verificadorCpf = () => {

        tamanhoCpf = cpfInput.value.replaceAll('.','').replace('-','').length

        if(tamanhoCpf == 11){
            const cpfNovePrimeiros = cpfInput.value.split('-')[0].replaceAll('.', '');
            const arrayCpfReverser = cpfNovePrimeiros.split('').reverse();

            // Primeiro dígito sendo verificado
            const primeiroDigitoVerificado = this.calculoCpf(arrayCpfReverser);
            arrayCpfReverser.unshift(String(primeiroDigitoVerificado));

            // Segundo dígito sendo verificado
            const segundoDigitoVerificado = this.calculoCpf(arrayCpfReverser);

            const cpfDigitosFinais = cpfInput.value.split('-')[1];
            const cpfDigitosFinaisVerificados = String(primeiroDigitoVerificado) + String(segundoDigitoVerificado);

            this.atualizarCorDeFundo(cpfDigitosFinais, cpfDigitosFinaisVerificados);
        }else{
            this.handleCpfMenorQueOnze()
        }
        
    };

    this.atualizarCorDeFundo = (cpfDigitosFinais, cpfDigitosFinaisVerificados) => {
        btn.style.backgroundColor = "";
        btn.style.color = "";
        cpfInput.style.outline = "";
        container.style.outline = "";
        boolVerificado = cpfDigitosFinais === cpfDigitosFinaisVerificados
        container.style.backgroundColor = boolVerificado ? "#20b841" : "#c72a2a";
        
        this.alterarCorText()
    };
    
    this.alterarCorText = () => {
        textspan.textContent = boolVerificado ? "CPF Valido" : " CPF Invalido"
        textspan.style.color = boolVerificado ? "#20b841" : "#c72a2a"

    }

    this.removerVerificado = () => {
        textspan.textContent = "------"
        textspan.style.color = ""
        container.style.backgroundColor = ""
        btn.style.backgroundColor = ""
        btn.style.color = ""
        cpfInput.style.outline = "";
        container.style.outline = "";
        
    }

    this.calculoCpf = (cpfFornecido) => {
        const resultadoTotal = cpfFornecido.reduce((a, v, i) => a += (v * (i + 2)), 0);
        const restoDivisao = resultadoTotal % 11;
        const digitoVerificado = restoDivisao < 2 ? 0 : 11 - restoDivisao;

        return digitoVerificado;
    };

    this.handleCpfMenorQueOnze = () => {
        
        container.style.outline = "3px solid #c72a2a";
        container.style.backgroundColor = "#fff";
        textspan.textContent = "CPF não está adequadamente configurada no tamanho correto";
        textspan.style.color = "#c72a2a";
        cpfInput.style.outline = "3px solid #c72a2a";
        btn.style.backgroundColor = "#c72a2a"
        btn.style.color = "#fff"

    }
}

const cpf = new Cpf();
cpf.iniciar();
