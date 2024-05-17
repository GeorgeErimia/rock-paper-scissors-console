const resultsDiv = document.querySelector('.results');
const roundHeading = document.querySelector('#round');

let playerPoints = 0;
let computerPoints = 0;

// INITIALIZE THE ROUND WITH 1
let round = 1;
let maxRounds = 5;

// ROUND METHODS
    // Display Round
function displayRound() {
    roundHeading.textContent = `${(round > maxRounds ? `${getWinnerMessage()}` : `ROUND ${round}`)}`
}
    // Increment Round
function updateRound() {
    if(round <= maxRounds)
        round++;
}
    // Reset Rounds
function resetRound() {
    round = 1;
}

displayRound();

function getWinnerMessage() {
    const winnerOverall = getWinnerOverall();
    return (winnerOverall === 'DRAW' ? `IT'S A DRAW` : `${winnerOverall} WON!`)
}

function getWinnerOverall() {
    if(playerPoints > computerPoints)
        return 'YOU';
    if(playerPoints < computerPoints)
        return 'COMPUTER';
    if(playerPoints === computerPoints)
        return 'DRAW';
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if(choice == 1) return "ROCK"
    else if(choice == 2) return "PAPER"
    else return "SCISSORS"
};

function getPlayerChoice() {
    let choice = "";
    while(choice != "ROCK" && choice != "PAPER" && choice != "SCISSORS") {
        choice = prompt("ROCK, PAPER, SCISSORS. SHOOT!")
        choice = choice.toUpperCase();
    }
    // console.log(choice);
    return choice
}

function checkWinner(playerChoice, computerChoice) {
    if(playerChoice == "ROCK") {
        if(computerChoice == "PAPER"){
            computerPoints++;
            return "COMPUTER";
        }
        else if (computerChoice == "SCISSORS")
            {
                playerPoints++;
                return "YOU";
            }
        else return "DRAW"
    } else if (playerChoice == "PAPER") {
        if(computerChoice == "SCISSORS")
            {
                computerPoints++;
                return "COMPUTER";
            }
        else if (computerChoice == "ROCK")
            {
                playerPoints++; 
                return "YOU";
            }
        else return "DRAW"
    } else if (playerChoice == "SCISSORS") {
        if(computerChoice == "ROCK")
            {
                computerPoints++; 
                return "COMPUTER";
            }
        else if (computerChoice == "PAPER")
            {
                playerPoints++; 
                return "YOU";
            }
        else return "DRAW"
    }
}

// function playGame(playerSelection) {
//     let userChoice = playerSelection;
//     // console.log("You chose " + userChoice)
//     const userChoiceElement = document.createElement('span');
//     userChoiceElement.textContent = `You chose ${userChoice}`;
//     resultsDiv.appendChild(userChoiceElement);

//     let computerChoice = getComputerChoice();
//     // console.log("Computer chose " + computerChoice)
//     const computerChoiceElement = document.createElement('span');
//     computerChoiceElement.textContent = `Computer chose ${computerChoice}`;
//     resultsDiv.appendChild(computerChoiceElement);

//     let winnerMessage = checkWinner(userChoice, computerChoice);
//     // console.log(winner);
//     const winnerMessageElement = document.createElement('span');
//     winnerMessageElement.textContent = winnerMessage;
//     resultsDiv.appendChild(winnerMessageElement);
// }

function playGame(playerSelection) {
    if(round <= maxRounds) {
        const playerChoice = playerSelection;
        const computerChoice = getComputerChoice();
        const winner = checkWinner(playerChoice, computerChoice);

        const computerChoiceElement = document.createElement('h3')
        computerChoiceElement.textContent = `Computer chose ${computerChoice} [${(winner == 'DRAW' ? "It's a Draw" : `${winner} Won!`)}]`
        resultsDiv.appendChild(computerChoiceElement);

        updateRound();
        displayRound();

        // console.log('Player: ' + playerPoints);
        // console.log('Computer: ' + computerPoints);
        // console.log(getWinnerOverall());
    }
}

const buttonsContainer = document.querySelector('.buttons');
buttonsContainer.addEventListener('click', (e) => {
    switch(e.target.id) {
        case 'btn-rock':
            playGame('ROCK');
            break;
        case 'btn-paper':
            playGame('PAPER');
            break;
        case 'btn-scissors':
            playGame('SCISSORS');
            break;
        case 'btn-reset':
            window.location.reload();
            break;
    }
})

// TODO: Implement round-based game (3 out of 5)

