function getComputerChoice() {
    let a = ["rock", "paper", "scissors"];
    return a[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {

    if (player === computer) {
        console.log(`Tie! Replay Round`);
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

function game(player) {

    let scoreP=0;
    let scoreC=0;
    // for (let index = 0; index < 4; index++) {
        // var player=prompt("Enter value:");
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
const btn1 = document.body.querySelector('#btn1');
btn1.addEventListener('click',function() {game("rock")});
const btn2 = document.body.querySelector('#btn2');
btn2.addEventListener('click',function() {game("paper")});
const btn3 = document.body.querySelector('#btn3');
btn3.addEventListener('click',function() {game("scissors")});