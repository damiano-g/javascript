
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
    let sel = prompt("Select 'r' for rock, 'p' for paper or 's' for scissors.");
    if (sel === "r"){
        return "rock"
    }
    if (sel === "p"){
        return "paper"
    }
    return "scissors"
};

console.log(getHumanChoice())