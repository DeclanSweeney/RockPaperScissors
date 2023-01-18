const RPS_ARRAY = ['rock', 'paper', 'scissors'];

document.querySelectorAll('button').forEach((item) => {
  item.addEventListener('click', (e) => {
    playRPSRound(item.id);
  });
});

function getComputerChoice() {
  let computerChoice = null;
  let compInt = Math.floor(Math.random() * 3);
  switch (compInt) {
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

function sanitizeInput(playerChoice) {
  let sanitizedPlayerChoice = playerChoice.toLowerCase();
  for (i in RPS_ARRAY) {
    if (RPS_ARRAY.includes(sanitizedPlayerChoice)) {
      return sanitizedPlayerChoice;
    } else {
      i++;
    }
    return;
  }
}

function determineWinner(compChoice, playerChoice) {
  if (compChoice == playerChoice) {
    console.log(`Draw! Both players picked ${compChoice}`);
    return 0;
  } else {
    if (
      (compChoice == 'rock' && playerChoice == 'scissors') ||
      (compChoice == 'paper' && playerChoice == 'rock') ||
      (compChoice == 'scissors' && playerChoice == 'paper')
    ) {
      console.log(
        `Computer wins! It chose ${compChoice}, while you chose ${playerChoice}`
      );
      return 1;
    } else {
      console.log(
        `Player wins! You chose ${playerChoice}, while computer chose ${compChoice}`
      );
      return 2;
    }
  }
}

function playRPSRound(playerChoice) {
  let compChoice = getComputerChoice();
  let sanitizedChoice = sanitizeInput(playerChoice);
  if (playerChoice == null) return;
  return determineWinner(compChoice, sanitizedChoice);
}

let playerScore = 0;
let compScore = 0;
while (playerScore < 5 && compScore < 5) {
  let winner = playRPSRound();
  switch (winner) {
    case 1:
      compScore++;
      break;
    case 2:
      playerScore++;
      break;
  }
}
console.log(
  `Game over! Player scored: ${playerScore}, Computer Scored ${compScore}`
);
