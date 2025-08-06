
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
    let sel = prompt("Select for rock, for paper or for scissors.");
    return sel.toLowerCase
};


console.log(getHumanChoice())