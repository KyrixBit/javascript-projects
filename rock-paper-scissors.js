function getComputer_play() {
    const random = Math.random();

        if (random > 0.666) {
        return "rock";
    }
        else if (random > 0.333) {
        return "scissors";
    }
    else {
        return "paper";
    }
}

function getHumanchoice (){
    return prompt ("Choose your play: Rock, Paper or Scissors?").toLowerCase();
}

function playRound (human_play, computer_play) {
    if (human_play === computer_play) {
        humanScore ++;
        computerScore ++;
        return "It´s a tie!";
    }
    if (human_play === "rock" && computer_play === "scissors") {
        humanScore ++;
        return "You Win! Rock beats Scissors!"
    }
    if (human_play === "scissors" && computer_play === "paper"){
        humanScore ++;
        return "You Win! Scissors beats Paper!"
    }
    if (human_play === "paper" && computer_play === "rock"){
        humanScore ++;
        return "You Win! Paper beats Rock!"
    }
    else {
        computerScore ++;
        return "You lose! " + computer_play + " beats " + human_play;
    }
}

let humanScore = 0
let computerScore = 0

function playGame() {
    
    console.log(playRound(getHumanchoice(), getComputer_play()));
    console.log(playRound(getHumanchoice(), getComputer_play()));
    console.log(playRound(getHumanchoice(), getComputer_play()));
    console.log(playRound(getHumanchoice(), getComputer_play()));
    console.log(playRound(getHumanchoice(), getComputer_play()));

    if (humanScore > computerScore) {
        console.log("Você ganhou o jogo! " + humanScore + " x " + computerScore)
    }
    else if (computerScore > humanScore) {
        console.log("Você perdeu o jogo! " + computerScore + " x " + humanScore)
    }
    else {
        console.log ("É um empate! " + computerScore + " x " + humanScore)
    }
}

playGame();