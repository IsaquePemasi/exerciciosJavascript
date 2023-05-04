const fisicaRadio = document.getElementById('fisica');
const cpfContainer = document.getElementById('cpfContainer');
const cnpjContainer = document.getElementById('cnpjContainer');
const dataNascimentoContainer = document.getElementById('dataNascimentoContainer');

fisicaRadio.addEventListener('change', function () {
    if (fisicaRadio.checked) {
        cpfContainer.style.display = 'block';
        cnpjContainer.style.display = 'none';
        dataNascimentoContainer.style.display = 'block';
    } else {
        cpfContainer.style.display = 'none';
        cnpjContainer.style.display = 'block';
        dataNascimentoContainer.style.display = 'none';
    }
});

const cnpjRadio = document.getElementById('juridica');
cnpjRadio.addEventListener('change', function () {
    if (cnpjRadio.checked) {
        cnpjContainer.style.display = 'block';
        cpfContainer.style.display = 'none';
        dataNascimentoContainer.style.display = 'none';
    } else {
        cnpjContainer.style.display = 'none';
        cpfContainer.style.display = 'block';
        dataNascimentoContainer.style.display = 'block';
    }
});