$(document).ready(function () {
    // Adicionando máscara ao campo de telefone
    $("#telefone").mask("(00)00000-0000");

    // Adicionando máscara ao campo de CPF
    $("#cpf").mask("000.000.000-00");

    // Adicionando máscara ao campo de data de nascimento
    $("#dataNascimento").mask("00/00/0000");
});

function validarFormulario() {
    const nome = $("#nome").val();
    const email = $("#email").val();
    const dataNascimento = $("#dataNascimento").val();
    const telefone = $("#telefone").val();
    const cpf = $("#cpf").val();

    if (nome === "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }

    if (email === "") {
        alert("Por favor, preencha o campo Email.");
        return false;
    }

    if (!validarEmail(email)) {
        alert("Email inválido. Por favor, insira um email válido.");
        return false;
    }

    if (dataNascimento === "" || !validardata(dataNascimento)) {
        alert("Por favor, preencha o campo Data de Nascimento.");
        return false;
    }
    

    if (telefone === "" || !validarTelefone(telefone)) {
        alert("Por favor, preencha o campo Telefone.");
        return false;
    }

    if (cpf === "" || !validarCPF(cpf)) {
        alert("CPF inválido. Por favor, insira um CPF válido.");
        return false;
    }

    return true;
}

function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarCPF(cpf) {
    // Verifica se o CPF está no formato correto
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

function validardata (dataNascimento){
    // Verifica se a data de nascimento está no formato correto (DD/MM/YYYY)
    const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regexData.test(dataNascimento);
}

function validarTelefone(telefone) {
    // Verifica se o telefone está no formato correto
    return /^\(\d{2}\)\d{5}-\d{4}$/.test(telefone);
}

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function(){
    for(let i = 0; i < revealElements.length; i++){
            const isElementsOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;
        if(isElementsOnScreen){
            revealElements[i].classList.add("revealed");
        }else{
            revealElements[i].classList.remove("revealed");
        }
    }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);