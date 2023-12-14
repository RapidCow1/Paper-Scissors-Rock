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
        console.log("You Lose! Paper beats Rock")
        return false
    } else if (playerAction === "rock" && computerSelection == "Scissors") {
        console.log("You Win! Rock beats Scissors")
        return true
    } else if (playerAction == "paper" && computerSelection === "Rock") {
        console.log("You Win! Paper beats Rock")
        return true
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        console.log("You Lose! Scissors beats Paper")
        return false
    } else if (playerSelection === "Scissors" && computerSelection == "Rock") {
        console.log("You Lose! Rock beats Scissors")
        return false
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You Win! Scissors beats Paper")
        return true
    } else {
        console.log("Its a tie!")
        return "Tie"
    }
}

function game() {
    const round = 0;
    let playerScore = 0;
    let computerScore = 0;
    
    while (round != 5) {
        const playerSelection = prompt("Paper, Scissors or Rock?");
        const computerSelection = getComputerChoice();

        let playerWinner = playRound(playerSelection, computerSelection)

    }
}


console.log(playRound(playerSelection, computerSelection))