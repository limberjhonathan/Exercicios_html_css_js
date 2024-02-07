function Compras(){
    this.inicio = () => {
        this.detectarClique()
    }

    this.detectarClique = () => {
        const btn = document.querySelector(".btn_conf")
        btn.addEventListener("click", this.comprasInseridas)
    }

    this.comprasInseridas = () => {
        const produto = document.querySelector("#produto")
        const quantidade = document.querySelector("#quantidade")
        const preco_uni = document.querySelector("#preco_uni")
    }
}

const compras = new Compras()
compras.inicio()