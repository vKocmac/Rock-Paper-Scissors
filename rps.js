"use strict"

let playerSelection;
let computerSelection;


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
      console.log("Draw");
    }else if (playerSelection === "rock"& computerSelection==="scissors") {
      console.log("You win");
    }else if (playerSelection === "rock"& computerSelection==="paper") {
      console.log("You lose");
    }else if (playerSelection === "paper"& computerSelection==="rock"){
      console.log("You win");
    }else if (playerSelection === "paper"& computerSelection==="scissors"){
      console.log("You lose");
    }else if (playerSelection === "scissors"& computerSelection==="paper"){
      console.log("You win");
    }else if (playerSelection === "scissors"& computerSelection==="rock"){
      console.log("You lose");
    }
    return(computerSelection,playerSelection);
  }

getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
