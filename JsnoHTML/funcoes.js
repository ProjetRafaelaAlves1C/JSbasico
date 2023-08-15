var nome
var email
var num = 0;
saldo = 2000;
var saque = 0;

function sacar(saque){
    saldo = saldo - saque
    return saldo
}

function listar(quadro){
    info = "Usuário número " + (++num) + "\n";
    info += "Nome: " + nome + "\n";
    info += "Email: " + email + "\n";
    info += "Saldo: " + sacar(saque) + "\n \n"
    quadro.value += info;
}