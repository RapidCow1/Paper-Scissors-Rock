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
        computerScore++
    } else if (playerAction === "rock" && computerSelection == "Scissors") {
        console.log("You Win! Rock beats Scissors")
        playerScore++
    } else if (playerAction == "paper" && computerSelection === "Rock") {
        console.log("You Win! Paper beats Rock")
        playerScore++
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        console.log("You Lose! Scissors beats Paper")
        computerScore++
    } else if (playerSelection === "scissors" && computerSelection == "Rock") {
        console.log("You Lose! Rock beats Scissors")
        computerScore++
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        console.log("You Win! Scissors beats Paper")
        playerScore++
    } else {
        console.log("Its a tie!")
    }
}

function game() {    
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = prompt("Paper, Scissors or Rock?");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        console.log(`Score - Player: ${playerScore} Computer: ${computerScore}`)
        
    }

    if (playerScore === 5) {
        console.log("You are the winner")
        return
    } else  {
        console.log("You are the loser")
        return
    }
}

let playerScore = 0;
let computerScore = 0;

game()