console.log("hello world!");

function getComputerChoice() {
    const rpsNumber = Math.round(Math.random() * 2) + 1;
    let rps = "";

    switch (rpsNumber) {
        case 1:
            rps = "Rock"
            break;
        case 2:
            rps = "Paper"
            break;
        case 3:
            rps = "Scisors"
            break;
        default:
            rps = "An error has occurred."

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