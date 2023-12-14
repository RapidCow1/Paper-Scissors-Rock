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
    console.log(playerAction)
}

console.log(playRound("PApEr", "rock"))
console.log(getComputerChoice())