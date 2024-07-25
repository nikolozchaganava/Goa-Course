//Class work 3
let num = Number(prompt("Enter a number:"));

if(isNaN(num) || num < 0){
    return "Enter the number that is more than 0!"
};

function guessTheNum(num){
    for(let i = 0; i <= num; i++){
        return i
    }
};

alert(guessTheNum());