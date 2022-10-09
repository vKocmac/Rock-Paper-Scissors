"use strict"

let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
let draws = 0;
let round = 0;

function getComputerChoice() {
  let computerChoice;
  let randomNo = Math.floor(Math.random() * 3) + 1;
  if (randomNo === 1) {
    computerChoice = "Rock";
  } else if (randomNo === 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function getUserChoice() {

  let buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      playerSelection = e.target.name.toLowerCase();
      playRound();

    });
  });
}

function playRound() {
  document.querySelector(".endGameResults").textContent = ""
  round++

  document.querySelector("h2").textContent = `Round ${round}`

  computerSelection = getComputerChoice().toLowerCase();

  if (playerSelection === computerSelection) {
    draws++;
    document.querySelector("h3").textContent = ` Draw`
  } else if (playerSelection === "rock" & computerSelection === "scissors") {
    playerWins++;
    document.querySelector("h3").textContent = `You won`
  } else if (playerSelection === "rock" & computerSelection === "paper") {
    computerWins++;
    document.querySelector("h3").textContent = `You lose`
  } else if (playerSelection === "paper" & computerSelection === "rock") {
    playerWins++;
    document.querySelector("h3").textContent = `You won`
  } else if (playerSelection === "paper" & computerSelection === "scissors") {
    computerWins++;
    document.querySelector("h3").textContent = `You lose`
  } else if (playerSelection === "scissors" & computerSelection === "paper") {
    playerWins++;
    document.querySelector("h3").textContent = `You won`
  } else if (playerSelection === "scissors" & computerSelection === "rock") {
    computerWins++;
    document.querySelector("h3").textContent = `You lose`
  }

  roundResults();
}

function game() {
  if (round <= 5) {
    getUserChoice();
  }
}


function roundResults() {

  wins.textContent = `Wins = ${playerWins}`
  losses.textContent = `Losses = ${computerWins}`
  draw.textContent = `Draws =${draws}`

  if (round === 5) {
    endGameResults();
  }
}

function endGameResults() {
  if (playerWins > computerWins) {
    document.querySelector(".endGameResults").textContent = "Awesome!! You won!"
    document.querySelector("h2").textContent = ``;
    document.querySelector("h3").textContent = ``;
  } else if (playerWins < computerWins) {
    document.querySelector("h2").textContent = ``;
    document.querySelector("h3").textContent = ``;
    document.querySelector(".endGameResults").textContent = "Shit happens..."
  } else {
    document.querySelector("h2").textContent = ``;
    document.querySelector("h3").textContent = ``;
    document.querySelector(".endGameResults").textContent = "Fair..it's a draw."
  }
  resetGame();
}

function resetGame() {
  playerSelection;
  computerSelection;
  playerWins = 0;
  computerWins = 0;
  draws = 0;
  round = 0;
}

game();
const div = document.querySelector(".counter");
const wins = document.createElement("div");
const losses = document.createElement("div");
const draw = document.createElement("div");
wins.classList.add("counter-items");
losses.classList.add("counter-items");
draw.classList.add("counter-items");
div.appendChild(wins);
div.appendChild(losses);
div.appendChild(draw);

// debugger
