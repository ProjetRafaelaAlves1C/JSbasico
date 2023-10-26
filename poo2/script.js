// Criamos um array para armazenar os objetos de pessoas cadastradas.
const peopleList = [];

// Obtemos uma referência ao formulário HTML com o ID "personForm".
const form = document.getElementById("personForm");

// Adicionamos um evento de escuta para o evento "submit" do formulário.
form.addEventListener("submit", function (e) {
    // Impedimos o comportamento padrão de envio do formulário.
    e.preventDefault();

    // Obtemos os valores dos campos de entrada do formulário.
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const language = document.getElementById("language").value;

    // Criamos um novo objeto de pessoa com os valores do formulário.
    const newPerson = {
        firstName: firstName,
        lastName: lastName,
        language: language
    };

    // Adicionamos o novo objeto de pessoa ao array de pessoas cadastradas.
    peopleList.push(newPerson);

    // Chamamos a função para exibir todas as pessoas cadastradas.
    displayAllDetails();
});

// Função para exibir todas as pessoas cadastradas na tabela HTML.
function displayAllDetails() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; // Limpa o conteúdo atual da tabela.

    // Loop através do array de pessoas cadastradas e cria as linhas da tabela.
    for (let i = 0; i < peopleList.length; i++) {
        const person = peopleList[i];
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.textContent = person.firstName;
        cell2.textContent = person.lastName;
        cell3.textContent = person.language;
    }
}