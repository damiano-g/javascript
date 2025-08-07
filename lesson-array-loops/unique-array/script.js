let myArr = ["Hare", "Hare", "Krishna", "Hare", "Krishna", "Hare", "Krishna", "Ciao", "Ciao"];

function filterUnique(arr){
    
    let uniqueArr = [];
    
    for(let str of arr){
        if(!uniqueArr.includes(str)){
            uniqueArr.push(str);
        }
    }

    return uniqueArr;
}

console.log(filterUnique(myArr));