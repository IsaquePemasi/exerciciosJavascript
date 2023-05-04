function ex03() {
    var corSelecionada = document.querySelector('input[name="cor"]:checked').value;
    document.body.style.backgroundColor = corSelecionada;
}
// 3 - Crie uma página com uma lista (select - RadioButton) com 4 opções de cores. Ao selecionar uma opção de cor, 
// altere o plano de fundo da página para a cor específica.