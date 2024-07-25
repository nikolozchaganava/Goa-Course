//Class work 2
let age = Number(prompt("How old are you?"));
let experience = Number(prompt("How many years of experience do you have?"))

function canTheyPass(age, experience){
    if(isNaN(age) || isNaN(experience) || age < 0 || experience < 0){
        return "Okay stop messing around nega put the valid number in here"
    }
    if(age >= 18 && experience >= 1){
        return "You can pass!"
    } else{
        return "You cant pass!"
    }
}

console.log(canTheyPass());