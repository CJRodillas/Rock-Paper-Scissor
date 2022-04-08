console.log("Hello World");

let computerSelection;

function computerPlay() {
       let arr = ["Rock", "Paper", "Scissors"];

       computerSelection = arr[Math.floor(Math.random() * arr.length)];

       console.log(computerSelection);
};

computerPlay();