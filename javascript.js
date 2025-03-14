console.log(`Enter "playGame()" to start!`);

let computerScore = 0;
let userScore = 0;

const btnDiv = document.querySelector("#btnContainer");
const computerResult = document.querySelector("#computerResult");
const userResult = document.querySelector("#userResult");
const winnerText = document.querySelector("#winnerText");
const computerGlobalResult = document.querySelector("#computerGlobalResult");
const userGlobalResult = document.querySelector("#userGlobalResult");
const finalWinnerText = document.querySelector("#finalWinnerText");

btnDiv.addEventListener("click", (e) => {
    const btnId = e.target.id;

    if (btnId === "rock" || btnId === "paper" || btnId === "scissors") {
        computerResult.textContent = "Computer: ";
        userResult.textContent = "User: ";
        winnerText.textContent = "WINNER: ";
        // quiero el resultado/return de la función, por eso pongo los (), no es una callback !!!
        playRound(getComputerChoice(), btnId);
    }

});

function getComputerChoice() {
    const rpsNumber = Math.round(Math.random() * 2) + 1;
    let computerChoice = "";

    switch (rpsNumber) {
        case 1:
            computerChoice = "rock"
            break;
        case 2:
            computerChoice = "paper"
            break;
        case 3:
            computerChoice = "scissors"
            break;
        default:
            computerChoice = "An error has occurred."

    }

    return computerChoice;

}

function playRound(computerSelection, humanSelection) {

    if (computerSelection === humanSelection) {

        computerResult.textContent += computerSelection;
        userResult.textContent += humanSelection;
        winnerText.textContent += "IT'S A TIE!";


    } else if (computerSelection === "scissors" && humanSelection === "paper") {

        computerResult.textContent += computerSelection;
        userResult.textContent += humanSelection;
        winnerText.textContent += "YOU LOSE!";

        computerScore++;
    }
    else if (computerSelection === "scissors" && humanSelection === "rock") {

        computerResult.textContent += computerSelection;
        userResult.textContent += humanSelection;
        winnerText.textContent += "YOU WIN!";

        userScore++;
    }
    else if (computerSelection === "paper" && humanSelection === "rock") {

        computerResult.textContent += computerSelection;
        userResult.textContent += humanSelection;
        winnerText.textContent += "YOU LOSE!";

        computerScore++;
    }
    else if (computerSelection === "paper" && humanSelection === "scissors") {

        computerResult.textContent += computerSelection;
        userResult.textContent += humanSelection;
        winnerText.textContent += "YOU WIN!";

        userScore++;
    }
    else if (computerSelection === "rock" && humanSelection === "paper") {

        computerResult.textContent += computerSelection;
        userResult.textContent += humanSelection;
        winnerText.textContent += "YOU WIN!";

        userScore++;
    }
    else if (computerSelection === "rock" && humanSelection === "scissors") {

        computerResult.textContent += computerSelection;
        userResult.textContent += humanSelection;
        winnerText.textContent += "YOU LOSE!";

        computerScore++;
    }

    computerGlobalResult.textContent = "COMPUTER: " + computerScore;
    userGlobalResult.textContent = "USER: " + userScore;
}

function resetGame() {
    computerScore = 0;
    userScore = 0;
    computerResult.textContent = "Computer: ";
    userResult.textContent = "User: ";
    winnerText.textContent = "WINNER: ";
    computerGlobalResult.textContent = "";
    userGlobalResult.textContent = "";
}

// pendiente: arreglar comportamiento cuando el user escribe algo mal, repetir esa llamada a la función hasta que lo que introduzca el user esté bien
// también podría dejarlo así, pero hacer otra alternativa sirve para practicar
// Además, al final de este proyecto se podría refactorizar para que quede bonito. Recuerda, una función por cada acción.
function playGame() {

    let winner = "";

    if (userScore === computerScore) {
        winner = "OMG! A TIE!";
    } else if (userScore > computerScore) {
        winner = "YOU WIN!";
    } else {
        winner = "YOU LOSE! :("
    }

    console.log("FINAL RESULTS:\nCOMPUTER: " + computerScore + "\nUSER: " + userScore);
    console.log(winner);

}