
function getComputerChoice()
{
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection === computerSelection)
    {
        console.log("it's a tie");
        return;
    }
    if((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || 
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || 
    (playerSelection === 'PAPER' && computerSelection === 'ROCK'))
    {
        console.log("You win!");
    }
    else if((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || 
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') || 
    (computerSelection === 'PAPER' && playerSelection === 'ROCK'))
    {
        console.log("You lose!");
    }
    else
    {
        console.log("invalid input");
    }
}

for(let i = 0; i < 5; i++)
{
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Enter your choice");
    console.log(`Your choice: ${playerSelection}
Computer'\s choice: ${computerSelection}`);
    playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase());
}
// console.log(computerSelection);

