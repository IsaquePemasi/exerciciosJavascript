function changeFontColor() {
    var p = document.getElementById("texto");
    if (p.style.color === "white") {
        p.style.color = "black";
    } else {
        p.style.color = "white";
    }
}

function changeBgColor() {
    var p = document.getElementById("texto");
    if (p.style.backgroundColor === "white") {
        p.style.backgroundColor = "black";
    } else {
        p.style.backgroundColor = "white";
    }
}
// Crie um parágrafo com um texto como conteúdo. Crie 4 botões. Dois para trocar a cor da fonte, de branco para preto e vice-versa e outros dois para fazer o mesmo com o fundo do parágrafo. Use divs se julgar necessário.