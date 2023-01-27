
function addUser() {
  player1Name = document.getElementById("player1NameInput").value; //pega o que foi escrito na caixa de texto e guarda na variável player1Name
  player2Name = document.getElementById("player2NameInput").value; //pega o que foi escrito na caixa de texto e guarda na variável player2Name

    localStorage.setItem("player1Name", player1Name); // armazenar dentro da "chave" o valor
    localStorage.setItem("player2Name", player2Name); // armazenar dentro da "chave" o valor

    window.location = "game_page.html"; //abre uma nova janela
}

