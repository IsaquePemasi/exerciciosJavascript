function validarForm() {
    var login = document.forms["formulario"]["login"].value;
    var senha = document.forms["formulario"]["senha"].value;
    var confirmaSenha = document.forms["formulario"]["confirmaSenha"].value;

    if (login == "" || senha == "" || confirmaSenha == "") {
        alert("Todos os campos devem ser preenchidos.");
        return false;
    }

    if (senha.length < 6 || senha.length > 10) {
        alert("A senha deve possuir entre 6 e 10 caracteres.");
        return false;
    }

    if (senha != confirmaSenha) {
        alert("A senha e a confirmação de senha devem ser iguais.");
        return false;
    }
}