let number = "2";
let number2 = 4;
let myString = "test String";

function addSeven(firstNum) {return Number(firstNum)+7};

function multiply(firstNum, secondNum) { return Number(firstNum)*Number(secondNum)};

function capitalize(inputString) {
    let firstChar = String(inputString).charAt(0).toUpperCase();
    let newString = String(inputString).substring(1);
    return firstChar + newString;
}

function lastLetter(inputString) {
    return String(inputString).charAt(String(inputString).length-1);
}

console.log("addSeven result: " + addSeven(number))
console.log("multiply result: " + multiply(number, number2))
console.log("capitalize result: " + capitalize(myString))
console.log("lastLetter result: "+ lastLetter(myString))