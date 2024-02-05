function getComputerChoice() {
    let a = ["rock", "paper", "scissors"];
    return a[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
    if (player === computer) {
        div.innerText=`Tie! Replay Round`;
        return 0;
    } else {
        switch (player) {
            case "rock":
                return computer === "scissors" ? 1 : -1;
            case "paper":
                return computer === "rock" ? 1 : -1;
            case "scissors":
                return computer === "paper" ? 1 : -1;
        }
    }
}

let currentRound = 1;
let scoreP = 0;
let scoreC = 0;

function startRound() {
    div.innerText+=`Round ${currentRound}`;
}

function handleButtonClick(playerChoice) {
    let comp = getComputerChoice();
    let point = playRound(playerChoice, comp);

    switch (point) {
        case 1:
            scoreP += 1;
            break;
        case -1:
            scoreC += 1;
            break;
        case 0:
            div.innerText="Replaying due to a tie.";
            // Prompt the user again for a different input in case of a tie
            return startRound();
    }

    // Display the score after each round
    div.innerText=`You ${scoreP}-${scoreC} Computer`;

    if (currentRound < 5) {
        currentRound += 1;
    } else {
        // Display the final result after 5 rounds
        if (scoreP > scoreC) {
            div.innerText=`You Win ${scoreP}-${scoreC} against the computer`;
        } else if (scoreP < scoreC) {
            div.innerText=`You Lose ${scoreP}-${scoreC} against the computer`;
        } else {
            div.innerText=`It's a Tie! ${scoreP}-${scoreC} against the computer`;
        }

        // Reset for a new game
        currentRound = 1;
        scoreP = 0;
        scoreC = 0;
    }
}

const startButton = document.body.querySelector('#start');
startButton.addEventListener('click', startRound);

const btn1 = document.body.querySelector('#btn1');
const btn2 = document.body.querySelector('#btn2');
const btn3 = document.body.querySelector('#btn3');

btn1.addEventListener('click', function() { handleButtonClick("rock"); });
btn2.addEventListener('click', function() { handleButtonClick("paper"); });
btn3.addEventListener('click', function() { handleButtonClick("scissors"); });

const div=document.querySelector("div");