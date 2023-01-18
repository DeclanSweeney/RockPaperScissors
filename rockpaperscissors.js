const RPS_ARRAY = ['rock', 'paper', 'scissors'];
const buttonDiv = document.querySelector('#buttons');
const scoreDiv = document.createElement('div');
const resultDiv = document.createElement('div');

scoreDiv.textContent =
  'Select an option to begin the game - First to five wins!';
buttonDiv.appendChild(scoreDiv);
buttonDiv.appendChild(resultDiv);

let scores = [0, 0];

document.querySelectorAll('button').forEach((item) => {
  item.addEventListener('click', (e) => {
    playRPSRound(item.id, scores);
    scoreDiv.textContent = `Player: ${scores[0]} Computer: ${scores[1]}`;
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

function determineWinner(compChoice, playerChoice, scores) {
  if (compChoice == playerChoice) {
    resultDiv.textContent = `Draw! Both players picked ${compChoice}`;
    return 0;
  } else {
    if (
      (compChoice == 'rock' && playerChoice == 'scissors') ||
      (compChoice == 'paper' && playerChoice == 'rock') ||
      (compChoice == 'scissors' && playerChoice == 'paper')
    ) {
      resultDiv.textContent = `Computer wins! It chose ${compChoice}, while you chose ${playerChoice}`;
      scores[1] += 1;
    } else {
      resultDiv.textContent = `Player wins! You chose ${playerChoice}, while computer chose ${compChoice}`;
      scores[0] += 1;
    }
    return;
  }
}

function playRPSRound(playerChoice, scores) {
  let compChoice = getComputerChoice();
  let sanitizedChoice = sanitizeInput(playerChoice);
  if (playerChoice == null) return;
  return determineWinner(compChoice, sanitizedChoice, scores);
}
