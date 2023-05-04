function Ex04() {
    var p = document.getElementById("p");
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}
// Crie um parágrafo (<p>) com um texto como conteúdo. Adicione um botão que, ao ser clicado, oculte ou mostre o texto do parágrafo.