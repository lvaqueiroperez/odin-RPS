console.log("hello world!");

let computerScore = 0;
let userScore = 0;

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
    let humanChoice = prompt("Write and submit:\nRock, Paper, Scissors", "").toLowerCase();

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

function playRound(computerSelection, humanSelection) {

    console.log("HUMAN: " + humanSelection);
    console.log("COMPUTER: " + computerSelection);

    if (humanSelection === "Invalid value") {
        console.log("An invalid value has been entered. Bye.");
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

playRound(getComputerChoice(), getHumanChoice());