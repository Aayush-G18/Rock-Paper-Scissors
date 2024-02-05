function getComputerChoice() {
    let a = ["rock", "paper", "scissors"];
    return a[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
    let playerSelection = player.toLowerCase();
    let computerSelection = computer.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log(`Tie! Replay Round`);
        return 0;
    } else {
        switch (playerSelection) {
            case "rock":
                return computerSelection === "scissors" ? 1 : -1;
            case "paper":
                return computerSelection === "rock" ? 1 : -1;
            case "scissors":
                return computerSelection === "paper" ? 1 : -1;
        }
    }
}

function game() {

    let scoreP=0;
    let scoreC=0;
    // for (let index = 0; index < 4; index++) {
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
    //}
    if (scoreP>scoreC) {
        console.log(`You win ${scoreP}-${scoreC} computer`);        
    }else {
        console.log(`You Lose ${scoreP}-${scoreC} computer`);
    }
}
const btns = document.body.querySelectorAll('#btn');
btns.forEach(btn =>{
    btn.addEventListener('click',game);
});