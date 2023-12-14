// Randomly generate a number between 1 and 3 inclusive
function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

// Randomly returns the computer choice
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

// Function will play a single round of the game
function playRound(playerSelection, computerSelection) {
    let playerAction = playerSelection.toLowerCase();
    
    if (playerAction === "rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerAction === "rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerAction == "paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Rock"
    } else if (playerSelection === "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper"
    } else {
        return "Its a tie!"
    }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))