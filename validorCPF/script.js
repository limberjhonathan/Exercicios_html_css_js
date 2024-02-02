function Cpf() {
    const cpfInput = document.querySelector(".inputCpf");

    this.iniciar = () => {
        this.detectarClique();
        this.adicionarEventoInput();
    };

    this.detectarClique = () => {
        const btn = document.querySelector(".btn");
        btn.addEventListener("click", this.verificadorCpf);
    };

    this.adicionarEventoInput = () => {
        cpfInput.addEventListener("input", this.limitarTamanhoCpf);
    };

    this.limitarTamanhoCpf = () => {
        cpfInput.value = cpfInput.value.replace(/\D/g, '').substring(0, 11);
    };

    this.verificadorCpf = () => {
        // Adicione a lógica de verificação de CPF aqui
    };
}

const cpf = new Cpf();
cpf.iniciar();
