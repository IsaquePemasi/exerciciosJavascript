function enableButton() {
    var checkboxes = document.querySelectorAll('input[type=checkbox]');
    var checkedCount = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedCount++;
        }
    }
    var button = document.getElementById('button');
    if (checkedCount >= 2) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

// Crie um formulário de seleção de itens com checkbox. O formulário deve possuir um botão desabilitado. O
//     botão só se torna clicável quando tiver pelo menos 2 checkboxs marcado