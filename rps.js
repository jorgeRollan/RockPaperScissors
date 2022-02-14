let partidas = 5; //numero de partidas a jugar

function computerPlay() {//funcion random de jugadas de computer
    let plays = ["ROCK", "PAPER", "SCISSORS"];
    let play = plays[Math.trunc(Math.random() * 3)];
    return play;
}

//funcion que realiza un chequeo de la entrada del usuari,no se usa en esta version
function checkPrompt(userPrompt) {
    switch (userPrompt.toUpperCase()) {
        case "ROCK":
            return "ROCK"; break;
        case "PAPER":
            return "PAPER"; break;
        case "SCISSORS":
            return "SCISSORS"; break;
        case ("EXIT"):
            return "EXIT"; break
        default: return null; break;
    }
}

function onePlay(computerPlay, userPlay) {
    let winner;
    switch (userPlay) {
        case ("ROCK"):
            switch (computerPlay) {
                case ("PAPER"):
                    winner = "COMPUTER"
                    break;
                case ("SCISSORS"):
                    winner = "USER"
                    break;
                default: winner = "DRAW"
                    break;
            }
            break;
        case ("PAPER"):
            switch (computerPlay) {
                case ("SCISSORS"):
                    winner = "COMPUTER"
                    break;
                case ("ROCK"):
                    winner = "USER"
                    break;
                default: winner = "DRAW"
                    break;
            }
            break;
        case ("SCISSORS"):
            switch (computerPlay) {
                case ("ROCK"):
                    winner = "COMPUTER"
                    break;
                case ("PAPER"):
                    winner = "USER"
                    break;
                default: winner = "DRAW"
                    break;
            }
            break;
    }
    displayLastMatch(userPlay, computerPlay, winner);
}
const body = document.querySelector("body");
const button1 = document.createElement("button");
button1.textContent = "PAPER";
body.appendChild(button1);
const button2 = document.createElement("button");
button2.textContent = "ROCK";
body.appendChild(button2);
const button3 = document.createElement("button");
button3.textContent = "SCISSORS";
body.appendChild(button3);

const div = document.createElement("div");
div.style.flex = auto = "1 1 auto";
const title = document.createElement("h1")
title.textContent = "RESULTADOS";
const div1 = document.createElement("div");
const maq = document.createElement("span")
maq.textContent = "MAQUINA    ";
const resultadoMaq = document.createElement("span")
resultadoMaq.textContent = 0;
resultadoMaq.className="resultadoMaq";
div.appendChild(title);
div1.appendChild(maq);
div1.appendChild(resultadoMaq);
const div2 = document.createElement("div");
const user = document.createElement("span")
user.textContent = "USER     ";
const resultadoUser = document.createElement("span")
resultadoUser.textContent = 0;
resultadoUser.className="resultadoUser";
div2.appendChild(user)
div2.appendChild(resultadoUser);
div.appendChild(div1)
div.appendChild(div2);
body.appendChild(div);

function displayLastMatch(jugadaUser, jugadaCompu, winner) {
    let displayLast = document.querySelector("body div .lastPlay");
    let userPlay = null;
    let computerPlay = null;
    let winnerText = null;
    if (!displayLast) {
        const divLastPlay = document.querySelector("body div");
        const resultDiv = document.createElement("div");
        resultDiv.className = "lastPlay";
        divLastPlay.appendChild(resultDiv);
        displayLast = document.querySelector("body div .lastPlay");
        userPlay = document.createElement("p")
        userPlay.className = "pUser";
        computerPlay = document.createElement("p");
        computerPlay.className = "pComputer";
        winnerText = document.createElement("p");
        winnerText.className = "pWinner";
        displayLast.appendChild(userPlay);
        displayLast.appendChild(computerPlay);
        displayLast.appendChild(winnerText)
    }
    userPlay = displayLast.querySelector(".pUser");
    computerPlay = displayLast.querySelector(".pComputer");
    winnerText = displayLast.querySelector(".pWinner");
    userPlay.textContent = "JUGADA ULTIMA USUARIO " + jugadaUser;
    computerPlay.textContent = "JUGADA ULTIMA COMPUTER " + jugadaCompu;
    if (winner == "DRAW") {
        winnerText.textContent = "EMPATE";
    }
    else {
        winnerText.textContent = "EL GANADOR FUE " + winner;
    }
    updateResults(winner);

}


const buttons = body.querySelectorAll("button");
buttons.forEach(element => addEvents(element));
function addEvents(element) {
    element.addEventListener("click", function () {
        if (partidas > 0) {
            onePlay(computerPlay(), element.textContent);
            partidas = partidas-1;
        }
    });
}

function updateResults(winner){   
    if(winner=="USER"){
        const user = document.querySelector(".resultadoUser");
    user.textContent = Number(user.textContent) + 1;
    }
    else if (winner=="COMPUTER"){
        const maq=document.querySelector(".resultadoMaq");
        maq.textContent = Number(maq.textContent) + 1;
    }
}