"use strict"

let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
let draws = 0;

function getComputerChoice(){
  let computerChoice;
  let randomNo = Math.floor(Math.random() * 3)+1;
  if (randomNo === 1){
    computerChoice = "Rock";
  }else if (randomNo === 2) {
    computerChoice = "Paper";
  }else{
    computerChoice = "Scissors";
  }
return computerChoice;
}

function playRound(playerSelection,computerSelection){
    playerSelection = prompt("Select").toLowerCase();
    computerSelection = getComputerChoice().toLocaleLowerCase();
    // console.log("computer = "+ computerSelection);
    // console.log("You = " + playerSelection);

    if (playerSelection === computerSelection){
      draws++;
      console.log("Draw");
    }else if (playerSelection === "rock"& computerSelection==="scissors") {
      playerWins++;
      console.log("You win");
    }else if (playerSelection === "rock"& computerSelection==="paper") {
      computerWins++;
      console.log("You lose");
    }else if (playerSelection === "paper"& computerSelection==="rock"){
      playerWins++;
      console.log("You win");
    }else if (playerSelection === "paper"& computerSelection==="scissors"){
      computerWins++;
      console.log("You lose");
    }else if (playerSelection === "scissors"& computerSelection==="paper"){
      playerWins++;
      console.log("You win");
    }else if (playerSelection === "scissors"& computerSelection==="rock"){
      computerWins++;
      console.log("You lose");
    }

    return(computerSelection,playerSelection);
  }

function game(){
  for (let i=0; i<5; i++){
    playRound(playerSelection,computerSelection);
  }
console.log("wins = " + playerWins + ", losses = " +computerWins + ", draws = " +draws);
if (playerWins > computerWins){
  console.log("Awesome!! You win!");
}
else if(playerWins > computerWins){
  console.log("Shit happens...");
}else{
  console.log("Fair..it's a draw.");
}
}
game();
