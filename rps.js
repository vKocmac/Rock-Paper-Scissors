"use strict"


function getComputerChoice(){
  let computerChoice;
  let randomNo = Math.floor(Math.random() * 3)+1;
  console.log(randomNo);
  if (randomNo === 1){
    computerChoice = "Rock";
  }else if (randomNo === 2) {
    computerChoice = "Paper";
  }else{
    computerChoice = "Scissors";
  }

console.log(computerChoice);
}
getComputerChoice();
