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

