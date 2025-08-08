let computerScore = 0
let humanScore = 0
let humanChoice = "";

const btn = document.querySelector(".buttons");
const rockBtn = document.querySelector("#rock");
const papBtn = document.querySelector("#paper");
const scisBtn = document.querySelector("#scissors");

const yourPlay = document.querySelector("#yourPlay");
const compPlay = document.querySelector("#compPlay");

const winner = document.querySelector("#win");

function getComputerChoice(){
    let rnd = Math.random();
    
    if (rnd < 1/3){
        return "rock"
    }
    if (rnd > 2/3){
        return "scissors"
    }
    return "paper"
};

/*function getHumanChoice(){
    let sel = prompt("Select rock, paper or scissors.");
    return sel.toLowerCase()
};*/

function playRound() {
    //let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    
    yourPlay.innerText = humanChoice;
    compPlay.innerText = computerChoice;

    if(computerChoice === humanChoice) winner.innerText = "Draw"

    if(computerChoice === "rock"){
        if(humanChoice === "paper"){
            humanScore++
            winner.innerText = "You win! Paper beats rock"
        }else{
            computerScore++
            winner.innerText = "You lose! Rock beats scissors"
        }
    }

    if(computerChoice === "paper"){
        if(humanChoice === "rock"){
            computerScore++
            winner.innerText = "You lose! Paper beats rock"
        }else{
            humanScore++
            winner.innerText = "You win! Scissors beats paper"
        }
    }

    if(computerChoice === "scissors"){
        if(humanChoice === "rock"){
            humanScore++
            winner.innerText = "You win! Rock beats scissors"
        }else{
            computerScore++
            winner.innerText = "You lose! Scissors beats paper"
        }
    }
};

/*function playGame(){

    let res

    while(computerScore < 3 && humanScore < 3){
        let res = playRound();
    }

    if(computerScore > humanScore) {
        res = "You lose the game!"
    }else{
        res = "You win the game!"
    }

    return res+"\nYour final score: "+humanScore+"\nComputer final score: "+computerScore
}*/

papBtn.addEventListener("click", () => humanChoice = papBtn.innerText.toLowerCase());
scisBtn.addEventListener("click", () => humanChoice = scisBtn.innerText.toLowerCase());
rockBtn.addEventListener("click", () => humanChoice = rockBtn.innerText.toLowerCase());
btn.addEventListener("click", playRound);


