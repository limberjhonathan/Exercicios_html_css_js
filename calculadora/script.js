function criarCalculadora(){
    return {
        display: document.querySelector(".display"),
        btnClear: document.querySelector(".btn-clear"),

        inicia(){
            this.cliqueBotoes()
            this.pressionaEnter()

        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realaizaConta()
                }
            })
        },

        clearDisplay(){
            this.display.value = ''
        },

        menosUm(){
            this.display.focus();
            // console.log(typeof this.display.value)
            this.display.value = this.display.value.slice(0, -1);
        },

        realaizaConta(){
            let conta = this.display.value 
            
            try{
                conta = eval(conta)
                if(!conta){
                    alert("Conta digitada inválida")
                    return;
                }
                this.display.value = String(conta)
            } catch(e){
                alert("conta invalida");
                return;
            }
        },

        cliqueBotoes(){
            document.addEventListener("click", (e) => {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains("btn-clear")){
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')){
                    this.menosUm()
                }
                
                if(el.classList.contains("btn-eq")){
                    this.realaizaConta()
                }
            })
        },
        btnParaDisplay(valor){
            this.display.value += valor;
            this.display.focus();
        }
    }
}

const calculadora = criarCalculadora()
//função iniciador
calculadora.inicia()