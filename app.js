function getComputerChoice() {
    let a = ["rock", "paper", "scissors"];
    return a[Math.floor(Math.random() * 3)];
}

function playRound(player,computer) {
    let playerSelection=player.toLowerCase();
    let computerSelection=computer.toLowerCase();
    let a = ["rock", "paper", "scissors"];
    if (a.indexOf(playerSelection) === a.indexOf(computerSelection)) {
        console.log(`Tie Replay Round`);
        return 0;
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "scissors"){
                console.log(`You Win!${playerSelection} beats ${computerSelection}`);
                return 1;
                }
                else {
                    console.log(`You Lose!${computerSelection} beats ${playerSelection}`);
                    return -1;
                }
                break;
            case "paper":
                if (computerSelection === "rock"){
                    console.log(`You Win!${playerSelection} beats ${computerSelection}`);
                    return 1;
                }
                else {
                    console.log(`You Lose!${computerSelection} beats ${playerSelection}`);
                    return -1;
                }
                    break;
            case "scissors":
                if (computerSelection === "paper"){
                    console.log(`You Win!${playerSelection} beats ${computerSelection}`);
                    return 1;
                }
                else {
                    console.log(`You Lose!${computerSelection} beats ${playerSelection}`);
                    return -1;
                }
                    break;
        }
    }
}

function game() {

    let scoreP=0;
    let scoreC=0;
    for (let index = 0; index < 4; index++) {
        var player=prompt("Enter value:");
        var comp=getComputerChoice();
        let point=playRound(player,comp);
        switch (point) {
            case 1:
                scoreP+=1;
                break;
            case -1:
                scoreC+=1;
                break;
            case 0:
                index-=1;
                break;
        }
    }
    if (scoreP>scoreC) {
        console.log(`You win ${scoreP}-${scoreC} computer`);        
    }else {
        console.log(`You Lose ${scoreP}-${scoreC} computer`);
    }
}

game();