'use strict';
// Computer selection logic
// Human selection logic
//Display their selection
//Compare selection to determine winner
//Display Result

const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
const btn = document.querySelectorAll('.btn');

const playerImg = document.querySelector('.playerImg');
const compImg = document.querySelector('.compImg');
const playerMove = document.querySelector('.playerMove');
const compMove = document.querySelector('.compMove');

const playerScore = document.querySelector('.playerScore');
const compScore = document.querySelector('.compScore');

const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

const newGame = document.querySelector('.newGame');

const gameState = document.querySelector('.gameState');

const you = document.querySelector('.you');
const comp = document.querySelector('.comp');

let isPlaying, humanScore, computerScore, human;

function init() {
    isPlaying = true;
    humanScore = 0;
    computerScore = 0;

    human = '';

    you.classList.remove('highlight');
    comp.classList.remove('highlight');

    playerImg.src = '';
    compImg.src = '';
    playerMove.textContent = '----';
    compMove.textContent = '----';
    playerScore.textContent = `Score: 0`;
    compScore.textContent = `Score: 0`;

    gameState.textContent = 'Let the game begin!'
    gameState.style.color = 'white';
    gameState.style.backgroundColor = 'black';
    gameState.style.scale = '1';
}

init();


function getCompChoice() {
    const comp = Math.floor(Math.random() * 3);
    if (comp === 0) {
        compImg.src = 'rock.png';
        compMove.textContent = "ROCK";
        return "ROCK";
    }
    else if (comp === 1) {
        compImg.src = 'paper.png';
        compMove.textContent = "PAPER";
        return "PAPER";
    }
    else if (comp === 2) {
        compImg.src = 'scissors.png';
        compMove.textContent = "SCISSORS";
        return "SCISSORS";
    }
}

// CHANGE LATER
document.addEventListener('keypress', function (k) {
    if (k.key = 'r') console.log('Rock');
});


btnRock.addEventListener('click', function () {
    if (isPlaying) {
        human = 'ROCK';
        playerImg.src = 'rock.png';
        playerMove.textContent = human;
        play();
        return human;
    }
});
btnPaper.addEventListener('click', function () {
    if (isPlaying) {
        human = 'PAPER';
        playerImg.src = 'paper.png';
        playerMove.textContent = human;
        play();
        return human;
    }
});
btnScissors.addEventListener('click', function () {
    if (isPlaying) {
        human = 'SCISSORS';
        playerImg.src = 'scissors.png';
        playerMove.textContent = human;
        play();
        return human;
    }
});


function play() {
    let humanSelect = human;
    let compSelect = getCompChoice();

    gameState.textContent = playRound(humanSelect, compSelect);
    // Check if any score is 5
    if (humanScore === 5) {
        gameState.textContent = 'You Win the Game!!!'
        gameState.style.color = 'black';
        gameState.style.backgroundColor = 'yellow';
        gameState.style.scale = '1.3';
        you.classList.add('highlight');
        isPlaying = false;
    } else if (computerScore === 5) {
        gameState.textContent = 'Computer Wins the Game!!!';
        gameState.style.color = 'black';
        gameState.style.backgroundColor = 'red';
        gameState.style.scale = '1.3';
        comp.classList.add('highlight');
        isPlaying = false;
    }
}

function playRound(humanChoice, compChoice) {
    if (humanChoice === 'ROCK' && compChoice === 'SCISSORS') {
        humanScore++;
        playerScore.textContent = `Score: ${humanScore}`;
        return 'You Score!';
    }
    else if (humanChoice === 'ROCK' && compChoice === 'PAPER') {
        computerScore++;
        compScore.textContent = `Score: ${computerScore}`;
        return 'Computer Scores!';
    }
    else if (humanChoice === 'PAPER' && compChoice === 'SCISSORS') {
        computerScore++;
        compScore.textContent = `Score: ${computerScore}`;
        return 'Computer Scores!';
    }
    else if (humanChoice === 'PAPER' && compChoice === 'ROCK') {
        humanScore++;
        playerScore.textContent = `Score: ${humanScore}`;
        return 'You Score!';
    }
    else if (humanChoice === 'SCISSORS' && compChoice === 'ROCK') {
        computerScore++;
        compScore.textContent = `Score: ${computerScore}`;
        return 'Computer Scores!';
    }
    else if (humanChoice === 'SCISSORS' && compChoice === 'PAPER') {
        humanScore++;
        playerScore.textContent = `Score: ${humanScore}`;
        return 'You Score!';
    }
    else if (humanChoice === compChoice) {
        return 'Round Draw.. No one scores.';
    }
    else {
        console.log('Invalid input, try again');
        return (playRound(getHumanChoice(), getCompChoice()));
    }
};

newGame.addEventListener('click', init);


// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(`\nRound ${i}`);

//         let humanSelect = getHumanChoice();

//         let compSelect = getCompChoice();
//         console.log(`You: ${humanSelect}\nComputer: ${compSelect}`);
//         console.log(playRound(humanSelect, compSelect), `| Your score: ${humanScore}, Computer score: ${computerScore}`);

//     }
//     console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
//     if (humanScore > computerScore)
//         console.log("You win!");
//     else if (computerScore > humanScore)
//         console.log("Computer Wins!\nBetter luck next time!");
//     else if (humanScore === computerScore)
//         console.log("Game Draw!");
// }

// console.log(`Best of 5 rounds`);
// playGame();