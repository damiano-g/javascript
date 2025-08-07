let myArr = [1,2,3,4,5,6,7,8,9];
let filteredArr = [];
let min = 2;
let max = 7;

function filterRange(arr, min, max){

    for(let i=0; i < myArr.length; i++){
        if(myArr[i] <= min || myArr >= max){
            filteredArr.push(myArr[i]);
        }
    }

    return filteredArr;
}

console.log(filterRange(myArr, min, max))