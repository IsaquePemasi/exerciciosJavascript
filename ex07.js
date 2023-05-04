function aumentarFonte() {
    const texto = document.getElementById("texto");
    const botaoMais = document.getElementById("botao-mais");
    const botaoMenos = document.getElementById("botao-menos");
    const tamanhoAtual = parseFloat(window.getComputedStyle(texto).fontSize);
    texto.style.fontSize = `${tamanhoAtual + 1}px`;
    botaoMais.addEventListener("click", aumentarFonte);
    botaoMenos.addEventListener("click", diminuirFonte);
}

function diminuirFonte() {
    const texto = document.getElementById("texto");
    const botaoMais = document.getElementById("botao-mais");
    const botaoMenos = document.getElementById("botao-menos");
    const tamanhoAtual = parseFloat(window.getComputedStyle(texto).fontSize);
    texto.style.fontSize = `${tamanhoAtual - 1}px`;
    botaoMais.addEventListener("click", aumentarFonte);
    botaoMenos.addEventListener("click", diminuirFonte);
}