const RPS_ARRAY = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = null;
    let compInt = Math.floor(Math.random() *3);
    switch(compInt){
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }
    return computerChoice;
}

function sanitizeInput() {
    let playerChoice = prompt('Rock, Paper or Scissors?');
    let sanitizedPlayerChoice = playerChoice.toLowerCase();
    for (i in RPS_ARRAY) {
        if (RPS_ARRAY[i] == sanitizedPlayerChoice) {
            return sanitizedPlayerChoice;
        } else {
            i++;
        }
    }
    alert('Please enter a valid response...');
    return sanitizeInput();
}

function determineWinner(compChoice, playerChoice) {
    if (compChoice == playerChoice) {
        console.log(`Draw! Both players picked ${compChoice}`);
        return 0;
    } else {
        if ((compChoice == 'rock' && playerChoice == 'scissors')
        || (compChoice == 'paper' && playerChoice == 'rock') 
        || (compChoice == 'scissors' && playerChoice == 'paper')) {
            console.log(`Computer wins! It chose ${compChoice}, while you chose ${playerChoice}`);
            return 1;
        } else {
            console.log(`Player wins! You chose ${playerChoice}, while computer chose ${compChoice}`);
            return 2;
        }
    }
}

function playRPSRound() {
    let compChoice = getComputerChoice();
    let sanitizedChoice = sanitizeInput();
    return determineWinner(compChoice, sanitizedChoice);
}

let playerScore = 0;
let compScore = 0;
while (playerScore < 3 && compScore < 3) {
    let winner = playRPSRound();
    switch(winner) {
        case 1:
            compScore++;
            break;
        case 2:
            playerScore++;
            break;
    }
}
console.log(`Game over! Player scored: ${playerScore}, Computer Scored ${compScore}`);

