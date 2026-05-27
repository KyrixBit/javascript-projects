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

function getWinner (humanScore, computerScore) {
    if (humanScore === 5){
        return document.getElementById("winner").textContent = "You Win!!! " + humanScore + " x " + computerScore
    }

    else if (computerScore === 5){
        return document.getElementById("winner").textContent = "You Lose!!!" + computerScore + " x " + humanScore
    }

    else {
        return document.getElementById("winner").textContent = "It's a Tie!!!" + humanScore + " x " + computerScore
    }
}

document.getElementById("rock").addEventListener("click", function(){
    const result = playRound("rock", getComputer_play());
    document.getElementById("results").textContent = result
    document.getElementById("score").textContent = "Human: " + humanScore + "| Computer: " + computerScore
    if (humanScore === 5 || computerScore === 5) {
    getWinner(humanScore, computerScore);
}
});

document.getElementById("paper").addEventListener("click", function(){
    const result = playRound("paper", getComputer_play());
    document.getElementById("results").textContent = result
    document.getElementById("score").textContent = "Human: " + humanScore + "| Computer: " + computerScore
    if (humanScore === 5 || computerScore === 5) {
    getWinner(humanScore, computerScore);
}
});

document.getElementById("scissors").addEventListener("click", function(){
    const result = playRound("scissors", getComputer_play());
    document.getElementById("results").textContent = result
    document.getElementById("score").textContent = "Human: " + humanScore + "| Computer: " + computerScore
    if (humanScore === 5 || computerScore === 5) {
    getWinner(humanScore, computerScore);
}
});