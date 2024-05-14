function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if(choice == 1) return "ROCK"
    else if(choice == 2) return "PAPER"
    else return "SCISSORS"
};

function getUserChoice() {
    let choice = "";
    while(choice != "ROCK" && choice != "PAPER" && choice != "SCISSORS") {
        choice = prompt("ROCK, PAPER, SCISSORS. SHOOT!")
        choice = choice.toUpperCase();
    }
    // console.log(choice);
    return choice
}

function checkWinner(userChoice, computerChoice) {
    if(userChoice == "ROCK") {
        if(computerChoice == "PAPER")
            return "COMPUTER WON!"
        else if (computerChoice == "SCISSORS")
            return "YOU WON!"
        else return "IT'S A DRAW!"
    } else if (userChoice == "PAPER") {
        if(computerChoice == "SCISSORS")
            return "COMPUTER WON!"
        else if (computerChoice == "ROCK")
            return "YOU WON!"
        else return "IT'S A DRAW!"
    } else if (userChoice == "SCISSORS") {
        if(computerChoice == "ROCK")
            return "COMPUTER WON!"
        else if (computerChoice == "PAPER")
            return "YOU WON!"
        else return "IT'S A DRAW!"
    }
}

function playGame() {
    let userChoice = getUserChoice();
    console.log("You chose " + userChoice)

    let computerChoice = getComputerChoice();
    console.log("Computer chose " + computerChoice)

    let winner = checkWinner(userChoice, computerChoice);

    console.log(winner);
}

// TODO: Implement round-based game (3 out of 5)