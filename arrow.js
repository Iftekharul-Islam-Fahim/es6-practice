/**
function doubleIt(num){
    return num * 2;
}
*/

/**
const doubleIt = function(num){
    return num * 2;
}

const doubleIt = function myFunction(num){
    return num * 2;
}
*/

//arrow function
const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const giveMeFive = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doMath(20, 10);
console.log(result);