console.log("Hello World");

function computerPlay() {
       let arr = ["Rock", "Paper", "Scissors"];

       let result = arr[Math.floor(Math.random() * arr.length)];

       console.log(result);
};

computerPlay();