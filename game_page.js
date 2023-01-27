//aula 91
	player1Name = localStorage.getItem("player1Name"); // pega o nome do jogador 1 e guarda na variavel
	player2Name = localStorage.getItem("player2Name"); // pega o nome do jogador 2 e guarda na variavel

	player1Score = 0; //pontuação inicial do jogador 1 igual a zero
	player2Score = 0; //pontuação inicial do jogador 2 igual a zero

document.getElementById("player1Name").innerHTML = player1Name + " : "; //coloca o nome do jogador 1 e :
document.getElementById("player2Name").innerHTML = player2Name + " : "; //coloca o nome do jogador 2 e :

document.getElementById("player1Score").innerHTML = player1Score ; // coloca os pontos do jogador 1
document.getElementById("player2Score").innerHTML = player2Score ; // coloca os pontos do jogador 2

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;//turno pergunta
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;//turno resposta

function send() {
	getWord = document.getElementById("word").value; //pega a palavra que foi escrita e guarda na variável
	word = getWord.toLowerCase(); //coloca todas as letras da palavra minusculas
	console.log("palavra em caixa baixa = " + word);//coloca a palavra no console

    charAt1 = word.charAt(1); // pega a segunda letra, pois está na posição 1
	console.log(charAt1); // mostra a letra no console
	lenghtDivide2 = Math.floor(word.length/2); // menor número inteiro do tamanho da palavra dividido por 2
	charAt2 = word.charAt(lenghtDivide2); // pega uma letra mais ou menos do meio
	console.log(charAt2); // mostra a letra no console

    lenghtMinus1 = word.length - 1; //última letra
    charAt3 = word.charAt(lenghtMinus1); // pega a última letra
	console.log(charAt3);// mostra a letra no console

    removeCharAt1 = word.replace(charAt1, "_");// substitui a letra por _
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");// substitui a letra por _
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");// substitui a letra por _
	console.log(removeCharAt3);//mostra como ficou no console

    questionWord = "<h4 id='wordDisplay'> Palavra: "+removeCharAt3+"</h4>";// coloca como ficou no site
    input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";//abre uma caixa de texto para resposta
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";// coloca o botão de checar
    row =  questionWord + input_box + checkButton ;  //junta as tres  coisas criadas aci,a
    document.getElementById("output").innerHTML = row; // coloca no html
document.getElementById("word").value = "";//deixa a palavra vazia para o próximo jogador
}

//aula 92
questionTurn = "player1";
answerTurn = "player2";


function check()
{
	getAnswer = document.getElementById("inputCheckBox").value;// guardar a resposta
	answer = getAnswer.toLowerCase();//colocar todas as letras minusculas
	console.log("resposta em caixa baixa - " + answer);// mostrar no console a resposta
	if(answer == word)	//se a resposta  for igual a palavra colocada
	{
		if(answerTurn == "player1") //se é a vez do jogador 1 responder
		{
			//player1Score ++
			player1Score = player1Score +1; //dar um ponto para o jogador 1
		    document.getElementById("player1Score").innerHTML = player1Score; //atualizar a pontuação na tela
		}
		else // se não
		{
			player2Score = player2Score +1;// dar ponto para o jogador 2
		    document.getElementById("player2Score").innerHTML = player2Score; //atualizar a pontuação na tela
		}
	}
	if(questionTurn == "player1") //se é a vez do jogador 1 perguntar
	{
		questionTurn = "player2" // mudar o turno
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player2Name ; //mostrar o turno na tela
	}
	else  // se não (é o jogador 2)
	{
		questionTurn = "player1" // mudar o turno
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player1Name ; //mostrar o turno na tela
	}

	if(answerTurn == "player1") //se é a vez do jogador 1 responder
	{
		answerTurn = "player2" // mudar o turno
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player2Name ;//mostrar o turno na tela
	}
	else 
	{
		answerTurn = "player1" // mudar o turno
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player1Name ; //mostrar o turno na tela
	}

    document.getElementById("output").innerHTML = ""; //deixa o espaço da resposta  vazio para o próximo jogador
}

