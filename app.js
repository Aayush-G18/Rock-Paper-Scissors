function getComputerChoice() {
    let a = ["rock", "paper", "scissors"];
    return a[Math.floor(Math.random() * 3)];
}

function playRound(player,computer) {
    let playerSelection=player.toLowerCase();
    let computerSelection=computer.toLowerCase();
    let a = ["rock", "paper", "scissors"];
    if (a.indexOf(playerSelection) === a.indexOf(computerSelection)) {
        return `Tie Replay Round`;
    } else {
        switch (playerSelection) {
            case "rock":
                return computerSelection === "scissors"
                ? `You Win!${playerSelection} beats ${computerSelection}`
                : `You Lose!${computerSelection} beats ${playerSelection}`;
                break;
            case "paper":
                return computerSelection === "rock"
                ? `You Win!${playerSelection} beats ${computerSelection}`
                : `You Lose!${computerSelection} beats ${playerSelection}`;
                break;
            case "scissors":
                return computerSelection === "paper"
                ? `You Win!${playerSelection} beats ${computerSelection}`
                : `You Lose!${computerSelection} beats ${playerSelection}`;
                break;
            }
        }
    }
var player="Rock";
var comp=getComputerChoice();
console.log(playRound(player,comp));