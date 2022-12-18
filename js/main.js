//Create an array called choices that contains the three options that a player can choose from.
const choices = ['rock', 'paper', 'scissors'];
console.log(choices);

//Create a function that will randomly select the computers choice from the array of choices.

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random(choices) * 3)];
    console.log(computerChoice);
    return computerChoice
}

getComputerChoice();