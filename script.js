function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    let choice = randomNumber();

    switch(choice) {
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
        case 3:
            return "Rock"
    }
}

function playRound(playerSelection, computerSelection) {
    let playerAction = playerSelection.toLowerCase();
    
    if (playerAction === "rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerAction === "rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))