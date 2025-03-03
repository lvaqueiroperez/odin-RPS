console.log("hello world!");

let computerScore = 0;
let userScore = 0;

function getComputerChoice() {
    const rpsNumber = Math.round(Math.random() * 2) + 1;
    let computerChoice = "";

    switch (rpsNumber) {
        case 1:
            computerChoice = "Rock"
            break;
        case 2:
            computerChoice = "Paper"
            break;
        case 3:
            computerChoice = "Scisors"
            break;
        default:
            computerChoice = "An error has occurred."

    }

    return rps;

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
            return "Invalid value";
    }


}