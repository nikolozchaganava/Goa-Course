//Class work 4
let num = Number(prompt("Enter a number!"));

function isNumberPrime(num){
    if(isNaN(num) || num < 1){
        return "Please Enter a valid Number"
    }

    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(isNumberPrime());