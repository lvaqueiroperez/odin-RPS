console.log("hello world!");

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

function getHumanChoice() {
    let humanChoice = prompt("Write and submit:\nRock, Paper, Scissors");

    if (humanChoice) {
        humanChoice = humanChoice.toLowerCase();
    }

    switch (humanChoice) {
        case "rock":
            return humanChoice;
        case "paper":
            return humanChoice;
        case "scissors":
            return humanChoice;
        default:
            alert("Invalid Rock, Paper, Scissors value!\nPlease, write exactly Rock, Paper or Scissors.");
            humanChoice = "Invalid value";
            return humanChoice;
    }


}

// pendiente: arreglar comportamiento cuando el user escribe algo mal, repetir esa llamada a la función hasta que lo que introduzca el user esté bien
function playGame() {

    let computerScore = 0;
    let userScore = 0;

    function playRound(computerSelection, humanSelection) {

        //console.log("HUMAN: " + humanSelection);
        //console.log("COMPUTER: " + computerSelection);

        if (humanSelection === "Invalid value") {
            console.log("An invalid value has been entered, you lose!");
            computerScore++;
        } else if (computerSelection === humanSelection) {
            console.log("Computer: " + computerSelection);
            console.log("You: " + humanSelection);
            console.log("It's a tie!");
        } else if (computerSelection === "scissors" && humanSelection === "paper") {
            console.log("Computer: " + computerSelection);
            console.log("You: " + humanSelection);
            console.log("You lose!");
            computerScore++;
        }
        else if (computerSelection === "scissors" && humanSelection === "rock") {
            console.log("Computer: " + computerSelection);
            console.log("You: " + humanSelection);
            console.log("You win!");
            userScore++;
        }
        else if (computerSelection === "paper" && humanSelection === "rock") {
            console.log("Computer: " + computerSelection);
            console.log("You: " + humanSelection);
            console.log("You lose!");
            computerScore++;
        }
        else if (computerSelection === "paper" && humanSelection === "scissors") {
            console.log("Computer: " + computerSelection);
            console.log("You: " + humanSelection);
            console.log("You win!");
            userScore++;
        }
        else if (computerSelection === "rock" && humanSelection === "paper") {
            console.log("Computer: " + computerSelection);
            console.log("You: " + humanSelection);
            console.log("You win!");
            userScore++;
        }
        else if (computerSelection === "rock" && humanSelection === "scissors") {
            console.log("Computer: " + computerSelection);
            console.log("You: " + humanSelection);
            console.log("You lose!");
            computerScore++;
        }

        console.log("Scores:\nUser: " + userScore + "\nComputer: " + computerScore);

    }

    //play 5 times
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());


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