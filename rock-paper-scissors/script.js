let computerScore = 0
let humanScore = 0

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

function getHumanChoice(){
    let sel = prompt("Select rock, paper or scissors.");
    return sel.toLowerCase()
};

function playRound() {
    let computerChoice = getComputerChoice();
    console.log("Computer choice: "+ computerChoice)
    let humanChoice = getHumanChoice();
    console.log("Human choice: " + humanChoice)

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

console.log(playRound())
console.log("Computer score: " + computerScore)
console.log("Human score: " + humanScore)