let myString = "test-string-used-for-camelize-function-testing";

let myArray = myString.split('-');

function camelize(str){

    for(let i=1; i < myArray.length; i++){
        let newString = myArray[i].replace(myArray[i].charAt(0), myArray[i].charAt(0).toUpperCase());
        myArray[i] = newString;
    }

    return myString = myArray.join('');
}

console.log(camelize(myString))