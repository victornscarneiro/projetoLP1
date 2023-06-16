var setaDireita = window.document.getElementById("setaD")
var Leonardo = window.document.getElementById("depoLeo")
var Samantha = window.document.getElementById("depoSam")
var Bruna = window.document.getElementById("depoBru")
var setaEsquerda = window.document.getElementById("setaE")

function rolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function rolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}