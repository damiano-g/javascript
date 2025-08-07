let myArr = [1,2,3,4,5,6,7,8,9];
let min = 2;
let max = 7;

function filterRange(arr, min, max){

    let tempArr = [];

    for(let i=0; i < myArr.length; i++){
        if(myArr[i] >= min && myArr[i] <= max){
            tempArr.push(myArr[i]);        
        }
    }

    myArr = tempArr;
}

filterRange(myArr, min, max);

//alert(myArr);
console.log(myArr);