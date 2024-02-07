function Compras() {
    const produto = document.querySelector("#produto");
    const quantidade = document.querySelector("#quantidade");
    const preco_uni = document.querySelector("#preco_uni");
    const btn_off = document.querySelector(".btn_off");
    const btn_conf = document.querySelector(".btn_conf");

    this.inicio = () => {
        this.detectarMudanca();
    };

    this.detectarMudanca = () => {
        produto.addEventListener("input", this.verificarCampos);
        quantidade.addEventListener("input", this.verificarCampos);
        preco_uni.addEventListener("input", this.verificarCampos);
    };

    this.verificarCampos = () => {
        if (produto.value.trim() !== '' && quantidade.value.trim() !== '' && preco_uni.value.trim() !== '') {
            btn_off.disabled = false;
            btn_conf.classList.add('enabled');
        } else {
            btn_off.disabled = true;
            btn_conf.classList.remove('enabled');
        }
    };
}

const compras = new Compras();
compras.inicio();
