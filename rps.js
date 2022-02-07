function computerPlay() {
    let plays = ["ROCK", "PAPER", "SCISSORS"];
    let play = plays[Math.trunc(Math.random() * 3)];
    console.log("jugada de la maquina " + play);
    return play;
}

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
    if (winner == "DRAW") {
        console.log(`HA HABIDO UN EMPATE CON ${userPlay}`);
    }
    else console.log(`el ganador fue ${winner} pc hizo ${computerPlay} user hizo ${userPlay}`);
}

function startGame() {
    let promtInput = prompt("INTRODUZCA PAPER ROCK SCISSORS o EXIT");
    promtInput = checkPrompt(promtInput);

    if (promtInput == null) {
        console.log("SOLO VALE ROCK PAPER SCISSORS o exit"); startGame();
    }
    else {
        if (promtInput != "EXIT") {
            onePlay(computerPlay(), promtInput);
        }
        else console.log("saliendo del juego")
    }
}
startGame();