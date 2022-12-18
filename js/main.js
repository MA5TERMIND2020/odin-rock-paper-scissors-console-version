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

/*Create a function that will get the selection of the player. It will perform input validation
 so that as long as the input is a case-insensitive match for one of the options that a player
 can choose from it will be accepted. Otherwise, it will keep asking the user for their selection*/

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Please make your selection. You can choose either Rock, Paper, or Scissors.");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (choices.includes(choiceInLower)) {
            validatedInput = true;
            console.log(choice);
            return choiceInLower;
        }
    }
}

getPlayerChoice();
