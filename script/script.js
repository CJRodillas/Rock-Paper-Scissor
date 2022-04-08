
let computerSelection = computerPlay();
let user = prompt("Please choose between Rock, Paper, Scissors: ");
let playerSelection = user.toLowerCase();

function computerPlay() {
       let arr = ["Paper", "Rock", "Scissors"];

       arr = arr[Math.floor(Math.random() * arr.length)];

       return arr.toLowerCase();
};

function playRound(computerSelection, playerSelection) {
       
       if (computerSelection == "paper" &&  playerSelection == "rock") {
              console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
       } else if (computerSelection == "paper" &&  playerSelection == "scissors") {
              console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
       } else if (computerSelection == "paper" &&  playerSelection == "Paper") {
              console.log(`Draw! you both play ${computerSelection}`);
       }  else if (computerSelection == "rock" &&  playerSelection == "scissors") {
              console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
       } else if (computerSelection == "rock" &&  playerSelection == "paper") {
              console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
       } else if (computerSelection == "rock" &&  playerSelection == "rock") {
              console.log(`Draw! you both play ${computerSelection}`);
       } else if (computerSelection == "scissors" &&  playerSelection == "paper") {
              console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
       } else if (computerSelection == "scissors" &&  playerSelection == "rock") {
              console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
       } else if (computerSelection == "scissors" &&  playerSelection == "scissors") {
              console.log(`Draw! you both play ${computerSelection}`);
       }
};

playRound(computerSelection, playerSelection);

