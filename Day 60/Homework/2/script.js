// Homework 2
let userAge = Number(prompt("What's your age?"));
let fatherAge = Number(prompt("What's your father's age?"));
let motherAge = Number(prompt("What's your mother's age?"));
let grandmaAge = Number(prompt("What's your grandma's age?"));
let grandpaAge = Number(prompt("What's your grandpa's age?"));

let travelInTime = Number(prompt("How much years would you like to travel into?"));

function travelIntoTime(travelInTime){
    console.log(`You will be ${userAge + travelInTime}`)
    console.log(`Your father will be ${fatherAge + travelInTime}`)
    console.log(`Your mother will be ${motherAge + travelInTime}`)
    console.log(`Your grandma will be ${grandmaAge + travelInTime}`)
    console.log(`Your grandpa will be ${grandpaAge + travelInTime}`)
}

travelIntoTime()