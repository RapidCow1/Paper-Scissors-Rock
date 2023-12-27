// Randomly generate a number between 1 and 3 inclusive
function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

// Randomly returns the computer choice
function getComputerChoice() {
    let choice = randomNumber();

    switch(choice) {
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        case 3:
            return "Rock";
    }
}

// Function will play a single round of the game
function playRound(playerSelection, computerSelection) {
    let playerAction = playerSelection.toLowerCase();
    const result = document.querySelector('#roundResult');
    
    if (playerAction === "rock" && computerSelection === "Paper") {
        result.textContent = "You Lose! Paper beats Rock";
        computerScore++;
        updateScores();
    } else if (playerAction === "rock" && computerSelection == "Scissors") {
        result.textContent = "You Win! Rock beats Scissors";
        playerScore++;
        updateScores();
    } else if (playerAction == "paper" && computerSelection === "Rock") {
        result.textContent = "You Win! Paper beats Rock";
        playerScore++;
        updateScores();
    } else if (playerAction === "paper" && computerSelection === "Scissors") {
        result.textContent = "You Lose! Scissors beats Paper";
        computerScore++;
        updateScores();
    } else if (playerAction === "scissors" && computerSelection == "Rock") {
        result.textContent = "You Lose! Rock beats Scissors";
        computerScore++;
        updateScores();
    } else if (playerAction === "scissors" && computerSelection === "Paper") {
        result.textContent = "You Win! Scissors beats Paper";
        playerScore++;
        updateScores();
    } else {
        result.textContent = "Its a tie!";
    }

    if (playerScore === 5 || computerScore === 5) gameEnd();
}

function gameEnd() {
    if (playerScore === 5) {
        alert("You are the winner!")
    } else {
        alert("Computer wins!")
    }
}

function updateScores() {
    document.querySelector('#playerScore').textContent = playerScore;
    document.querySelector('#computerScore').textContent = computerScore;
}

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => playRound("Paper", getComputerChoice()));

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => playRound("Scissors", getComputerChoice()));

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => playRound("Rock", getComputerChoice()));

let playerScore = 0;
let computerScore = 0;
