This game is a rock-paper-scissors game that runs inside the console.

The game will be played against the computer.

The getComputerChoice() function returns the choice that the computer makes: 
1. Generates a random number from 1 to 3
2. Check the number : 
    - If the number is 0, then the result is "Rock"
    - If the number is 1, then the result is "Paper"
    - If the number is 2, then the result is "Scissors"

The getUserChoice() function returns the choice that the user makes: 
3. Await user input in the console:
    - User input will be a string, either "Rock", "Paper" or "Scissors"

The checkWinner() method does the following: 
4. Compare user input with the computer choice according to the following rules: 
    - Rock beats Scissors
    - Scissors beat Paper
    - Paper beats Rock
    - The first argument is the user input and the second argument will be the computer choice

5. In each case, if the winner is the user (first argument), then return 1.
6. Else, if the winner is the computer, then return 2
7. Otherwise, it's a draw, return 3.