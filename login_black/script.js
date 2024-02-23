class Eye{
    constructor(){
        this.eye = document.querySelector("#eye")
    }
        
    cliqueEye(){
        this.eye.addEventListener("click", () => {
            alert("ok")
        })
    }
}

const e = new Eye();
e.cliqueEye()