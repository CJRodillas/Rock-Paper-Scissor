function computerPlay() {
       let arr = ["Paper", "Rock", "Scissors"];

       arr = arr[Math.floor(Math.random() * arr.length)];

       return arr.toLowerCase();
};

function playRound(computerSelection, playerSelection) {
       
       if (computerSelection == "paper" &&  playerSelection == "rock") {
              console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
              computerScore++;
       } else if (computerSelection == "paper" &&  playerSelection == "scissors") {
              console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
              userScore++;
       } else if (computerSelection == "paper" &&  playerSelection == "Paper") {
              console.log(`Draw! you both play ${computerSelection}`);
              drawScore++;
       }  else if (computerSelection == "rock" &&  playerSelection == "scissors") {
              console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
              computerScore++;
       } else if (computerSelection == "rock" &&  playerSelection == "paper") {
              console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
              userScore++;
       } else if (computerSelection == "rock" &&  playerSelection == "rock") {
              console.log(`Draw! you both play ${computerSelection}`);
              drawScore++;
       } else if (computerSelection == "scissors" &&  playerSelection == "paper") {
              console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
              computerScore++;
       } else if (computerSelection == "scissors" &&  playerSelection == "rock") {
              console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
              userScore++;
       } else if (computerSelection == "scissors" &&  playerSelection == "scissors") {
              console.log(`Draw! you both play ${computerSelection}`);
              drawScore++;
       }
};

let userScore = parseInt(0);
let computerScore = parseInt(0);
let drawScore = parseInt(0);

function game() {

       for (let i = 0; i < 5; i++) {
              let computerSelection = computerPlay();
              let user = prompt("Please choose between Rock, Paper, Scissors: ");
              let playerSelection = user.toLowerCase();

              playRound(computerSelection, playerSelection);
       };

       if (userScore == computerScore) {
              alert("Draw");
       } else if (userScore > computerScore) {
              alert(`You Win User: ${userScore} Computer: ${computerScore} Draw ${drawScore}`);
       } else if (userScore < computerScore) {
              alert(`You Lose User: ${userScore} Computer: ${computerScore} Draw:${drawScore}`);
       }
}

game();
