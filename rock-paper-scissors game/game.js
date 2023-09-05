let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('button');

let results = document.createElement('h1');
let resultDiv = document.querySelector('.results').appendChild(results);

let score = document.createElement('h3');
let scoreDiv = document.querySelector('.score').appendChild(score);
scoreDiv.textContent = `${playerScore} - ${computerScore}`

let selections = document.createElement('h4');
let selectionsDiv = document.querySelector('.selections').appendChild(selections);

let restartDiv = document.querySelector('.restart-button');
let restartButton = document.createElement('button');
restartButton.textContent = 'Play again';

const currentYear = new Date().getFullYear();
document.querySelector('.currentYear').textContent = currentYear;

function getComputerChoice()
{
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function isGameOver()
{
    if(playerScore === 5 || computerScore === 5)
    {
        handleGameOver()
        return true;
    }
    return false;
}

function disableButtons() 
{
    buttons.forEach(button => button.disabled = true )
}

function enableButtons() 
{
    buttons.forEach(button => button.disabled = false )
}

function handleGameOver()
{
    if(playerScore === 5)
    {
        resultDiv.textContent = 'You won the match!';
    }
    if(computerScore === 5)
    {
        resultDiv.textContent = 'You lost the match :(';
    }
}

function handleRestart()
{
    playerScore = 0;
    computerScore = 0;
    scoreDiv.textContent = `${playerScore} - ${computerScore}`
    restartDiv.removeChild(restartButton);
    enableButtons();
    resultDiv.textContent = '';
    selectionsDiv.textContent = '';
}

function playRound(playerSelection)
{
    if(playerSelection === 'Restart')
    {
        playerScore = 0;
        computerScore = 0;
    }
    let computerSelection = getComputerChoice();
    selectionsDiv.textContent = `${playerSelection} - ${computerSelection}`;
    if(playerSelection === computerSelection)
    {
        resultDiv.textContent = 'It\'s a tie';
        return;
    }
    if((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || 
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || 
    (playerSelection === 'PAPER' && computerSelection === 'ROCK'))
    {
        playerScore++;
        selectionsDiv.textContent = `${playerSelection} beats ${computerSelection}`;
        resultDiv.textContent = 'You win!';
    }
    else if((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || 
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') || 
    (computerSelection === 'PAPER' && playerSelection === 'ROCK'))
    {
        computerScore++;
        selectionsDiv.textContent = `${computerSelection} beats ${playerSelection}`;
        resultDiv.textContent = 'You lose!';
    }
    scoreDiv.textContent = `${playerScore} - ${computerScore}`;
    if(isGameOver()) {
        playerScore = 0;
        computerScore = 0;
        disableButtons();
        restartDiv.appendChild(restartButton);
    }
}

buttons.forEach(button => button.addEventListener('click', () => {
    playRound(button.innerText);

}));

restartButton.addEventListener('click', handleRestart);
