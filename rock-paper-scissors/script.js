let computerScore = 0
let humanScore = 0
let humanChoice;

const btn = document.querySelector("button");
const yourPlay = document.querySelector("#yourPlay");
const compPlay = document.querySelector("#compPlay");

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

    const play = document.createElement("span");

    play.innerText = computerChoice;

    compPlay.appendChild(play);
    
    if(computerChoice === humanChoice) return "Draw"

    if(computerChoice === "rock"){
        if(humanChoice === "paper"){
            humanScore++
            return "You win! Paper beats rock"
        }else{
            computerScore++
            return "You lose! Rock beats scissors"
        }
    }

    if(computerChoice === "paper"){
        if(humanChoice === "rock"){
            computerScore++
            return "You lose! Paper beats rock"
        }else{
            humanScore++
            return "You win! Scissors beats paper"
        }
    }

    if(computerChoice === "scissors"){
        if(humanChoice === "rock"){
            humanScore++
            return "You win! Rock beats scissors"
        }else{
            computerScore++
            return "You lose! Scissors beats paper"
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


btn.addEventListener("click", playRound);
btn.addEventListener("click", ()=>humanChoice = btn.innerText);


