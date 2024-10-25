//Homework 1
let user = {
    name : prompt(`What's your name?`),
    age : Number(`Whats's your age?`),
    city : prompt(`Which city do you live in?`)
};

console.log(
    `Your name is ${user.name}, you are ${user.age} years old, and you live in ${user.city}`
);

//Homework 2
let userInput = {
    userAge : Number(prompt(`How old are you?`)),
    motherAge : Number(prompt(`How old is your mother?`)),
    fatherAge : Number(prompt(`How old is your father?`)),
    grandfatherAge : Number(prompt(`How old is your grandfather?`)),
    grandmotherAge : Number(prompt(`How old is your grandmother?`)),
};

let future = Number(prompt(`How many years do you want to travel?`));

function ageCalculator(){
    console.log(userInput.userAge + future);
    console.log(userInput.motherAge + future);
    console.log(userInput.fatherAge + future);
    console.log(userInput.grandmotherAge + future);
    console.log(userInput.grandfatherAge+ future);
}

ageCalculator();

//Homework 3

user.name = niko;
user.age = 13;
user.city = Rustavi;

console.log(user.name, user.age, user.city)