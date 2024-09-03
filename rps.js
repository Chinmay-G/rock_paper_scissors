// Computer selection logic
// Human selection logic
//Display their selection
//Compare selection to determine winner
//Display Result


function getCompChoice() {
    const comp = Math.floor(Math.random() * 3);
    if (comp === 0)
        return "ROCK";
    else if (comp === 1)
        return "PAPER";
    else if (comp === 2)
        return "SCISSORS";
}

function getHumanChoice() {
    const human = (prompt(`Enter Your choice: `)).toUpperCase();
    return human;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,compChoice) {
    if(humanChoice==='ROCK' && compChoice==='SCISSORS'){
        humanScore++;
        return 'You Win! Rock beats Scissors.';
    }
    else if(humanChoice==='ROCK' && compChoice==='PAPER'){
        computerScore++;
        return 'Computer Wins! Paper beats Rock.';
    }
    else if(humanChoice==='PAPER' && compChoice==='SCISSORS'){
        computerScore++;
        return 'Computer Wins! Scissors beats Paper.';
    }
    else if(humanChoice==='PAPER' && compChoice==='ROCK'){
        humanScore++;
        return 'You Win! Paper beats Rock.';
    }
    else if(humanChoice==='SCISSORS' && compChoice==='ROCK'){
        computerScore++;
        return 'Computer Wins! Rock beats Scissors.';
    }
    else if(humanChoice==='SCISSORS' && compChoice==='PAPER'){
        humanScore++;
        return 'You Win! Scissors beats Paper.';
    }
    else if(humanChoice === compChoice){
        return 'Round Draw';
    }
    else
        return 'Invalid input';
}


function playGame() {
    for(i=1; i<=5; i++) {
        console.log(`\nRound ${i}`);

        let humanSelect = getHumanChoice();
        let compSelect = getCompChoice();
        console.log(`You: ${humanSelect}\nComputer: ${compSelect}`);
        console.log(playRound(humanSelect, compSelect), `| Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
    if(humanScore>computerScore)
        console.log("You win!");
    else if(computerScore>humanScore)
        console.log("Computer Wins!\nBetter luck next time!");
    else if(humanScore===computerScore)
        console.log("Game Draw!");
}

console.log(`Best of 5 rounds`);
playGame();