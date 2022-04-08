
let computerSelection = computerPlay();
let playerSelection = prompt("Please choose between Rock, Paper, Scissors: ");;

function computerPlay() {
       let arr = ["Paper", "Rock", "Scissors"];

       arr = arr[Math.floor(Math.random() * arr.length)];

       return arr;
};

function playRound(computerSelection, playerSelection) {
       
       if (computerSelection == "Paper" &&  playerSelection == "Rock") {
              console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
       } else if (computerSelection == "Paper" &&  playerSelection == "Scissors") {
              console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
       } else if (computerSelection == "Paper" &&  playerSelection == "Paper") {
              console.log(`Draw! you both play ${computerSelection}`);
       }  else if (computerSelection == "Rock" &&  playerSelection == "Scissors") {
              console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
       } else if (computerSelection == "Rock" &&  playerSelection == "Paper") {
              console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
       } else if (computerSelection == "Rock" &&  playerSelection == "Rock") {
              console.log(`Draw! you both play ${computerSelection}`);
       } else if (computerSelection == "Scissors" &&  playerSelection == "Paper") {
              console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
       } else if (computerSelection == "Scissors" &&  playerSelection == "Rock") {
              console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
       } else if (computerSelection == "Scissors" &&  playerSelection == "Scissors") {
              console.log(`Draw! you both play ${computerSelection}`);
       }
};

playRound(computerSelection, playerSelection);

