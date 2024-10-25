// Homework 1
const x = 10
let y = Number(prompt(`Hello choose the number that's more than 10`));

if(x > y){
    console.log(`You are correct! ${y} is bigger then ${x}`)
} else if (x === y){
    console.log(`Both of these numbers are equal`)
} else {
    console.log(`You are wrong! ${y} is less then ${x}`)
}

// Homework 2
let ageConfirmation = confirm("Are you 18 years old or older?");

if (ageConfirmation) {
    console.log("You can to vote");
} else {
    console.log("You can not vote");
}

// Homework 3
let b = Number(prompt(`Write a random number`));

if (b > 0){
    console.log(`The number is positive`);
} else if (b < 0){
    console.log(`The number is negative`);
} else{
    console.log(`The number is zero`);
}

//Homework 4
let c = Number(prompt(`How old are you?`));

if (c < 13){
    console.log(`Go away kiddo(no offense)`);
} else if(13< c < 19){
    console.log(`You are a teenager`);
} else if(c < 0){
    console.log(`You are customising you character`);
} else{
    console.log(`You are an adult`);
}

// Homework 5

let d = Number(prompt(`How much points did you get on avarage`));

if (d === 100){
    console.log(`Your adducation has been fully financed!(Are you asian by any chance)`)
} else if ()