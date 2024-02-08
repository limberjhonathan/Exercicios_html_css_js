function Compras() {
    const produto = document.querySelector("#produto");
    const quantidade = document.querySelector("#quantidade");
    const preco_uni = document.querySelector("#preco_uni");
    const btn_conf = document.querySelector(".btn_conf");
    const btn_off = document.querySelector(".btn_off");
    const table = document.querySelector(".table-container");
    let enterPressed = false

    this.inicio = () => {
        this.detectarMudanca();
        this.detectarClique();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Enter' && enterPressed ) {
                this.adicionarProduto()
            }
        });
    };

    this.detectarClique = () => btn_conf.addEventListener("click", this.adicionarProduto);

    this.adicionarProduto = () => {
        // Verificar se quantidade e preço são números válidos
        const newTr = document.createElement("tr");
        const newTd_produto = document.createElement("td");
        const newTd_quantidade = document.createElement("td");
        const newTd_preco = document.createElement("td");
        const newTd_total = document.createElement("td");
        const newTd_data = document.createElement("td");

        newTd_produto.textContent = produto.value;
        newTd_quantidade.textContent = quantidade.value;

        let preco =  (preco_uni.value).replace(',', '.')
        newTd_preco.textContent = `${this.formatarNumero(preco)}`;
        newTd_total.textContent = `${this.formatarNumero((preco * quantidade.value))}`;
        newTd_data.textContent = this.dataAtual();

        newTr.append(newTd_produto, newTd_quantidade, newTd_preco, newTd_total, newTd_data);
        table.appendChild(newTr);
        console.log("Dados enviados com sucesso.");
    };

    this.dataAtual = () => {
        const data = new Date();

        const dia = String(data.getDate()).padStart(2, '0');
        const mes = data.getMonth() + 1;
        const ano = data.getFullYear();

        const horas = data.getHours();
        const minutos = data.getMinutes();
        const segundos = data.getSeconds();

        // return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
        return `${dia}/${mes}/${ano}`;
    };

    this.detectarMudanca = () => {
        produto.addEventListener("input", this.verificarCampos);
        quantidade.addEventListener("input", this.verificarCampos);
        preco_uni.addEventListener("input", this.verificarCampos);
    };

    this.verificarCampos = () => {
        const q = quantidade.value;
        const p_u = preco_uni.value.replace(',', '.');

        produto.style.outline = "";
        quantidade.style.outline = isNaN(q) ? "2px solid red" : "";
        preco_uni.style.outline = isNaN(p_u) ? "2px solid red" : "";

        if (produto.value.trim() !== '' && q !== '' && p_u !== '' && !isNaN(q) && !isNaN(p_u)) {
            btn_off.disabled = false;
            btn_conf.classList.add('enabled');
            enterPressed  = true;
        } else {
            btn_off.disabled = true;
            btn_conf.classList.remove('enabled');
            enterPressed  = false;
        }
    };

    this.formatarNumero = (numero) => {
        return `R$ ${parseFloat(numero).toFixed(2)}`;
    };
}

const compras = new Compras();
compras.inicio();
