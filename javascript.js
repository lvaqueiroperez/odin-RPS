console.log(`Enter "playGame()" to start!`);

let computerScore = 0;
let userScore = 0;

const btnDiv = document.querySelector("#btnContainer");
const resultDiv = document.querySelector("#resultContainer");

btnDiv.addEventListener("click", (e) => {
    const btnId = e.target.id;

    if (btnId === "rock" || btnId === "paper" || btnId === "scissors") {
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

function getResultText(winner, computerSelection, humanSelection) {
    switch (winner) {
        case "user":
            return `Computer: ${computerSelection}\nYou: ${humanSelection}\nYou win!`;


        case "computer":
            return `Computer: ${computerSelection}\nYou: ${humanSelection}\nYou lose!`;


        case "tie":
            return `Computer: ${computerSelection}\nYou: ${humanSelection}\nIT'S A TIE!`;


        default:
            return "ERROR";

    }
}

function playRound(computerSelection, humanSelection) {

    if (!humanSelection) {
        resultDiv.textContent = "An invalid value has been entered, you lose!";
        computerScore++;

    } else if (computerSelection === humanSelection) {
        resultDiv.textContent = getResultText("tie", computerSelection, humanSelection);

    } else if (computerSelection === "scissors" && humanSelection === "paper") {
        resultDiv.textContent = getResultText("computer", computerSelection, humanSelection);
        computerScore++;
    }
    else if (computerSelection === "scissors" && humanSelection === "rock") {
        resultDiv.textContent = getResultText("user", computerSelection, humanSelection);

        userScore++;
    }
    else if (computerSelection === "paper" && humanSelection === "rock") {
        resultDiv.textContent = getResultText("computer", computerSelection, humanSelection);
        computerScore++;
    }
    else if (computerSelection === "paper" && humanSelection === "scissors") {
        resultDiv.textContent = getResultText("user", computerSelection, humanSelection);
        userScore++;
    }
    else if (computerSelection === "rock" && humanSelection === "paper") {
        resultDiv.textContent = getResultText("user", computerSelection, humanSelection);
        userScore++;
    }
    else if (computerSelection === "rock" && humanSelection === "scissors") {
        resultDiv.textContent = getResultText("computer", computerSelection, humanSelection);
        computerScore++;
    }

    resultDiv.textContent += "\nScores:\nUser: " + userScore + "\nComputer: " + computerScore;

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