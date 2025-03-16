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

    if (userScore === 5) {
        // enseña el alert antes de mostrar un 5 en la puntuación, buscar manera de pausar un poco el código antes
        alert("YAY! YOU WIN!");
        resetGame();

    } else if (computerScore === 5) {
        alert("OH NO! YOU HAVE LOST!");
        resetGame();
    }
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