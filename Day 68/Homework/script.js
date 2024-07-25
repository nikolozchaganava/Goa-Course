//Homework 1
for(let i = 0; i <= 10; i++){
    console.log(i)
}

//Homework 2
for(let i = 0; i <= 20; i+= 2){
    console.log(i)
}

//Homework 3
let sum = 0;
for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log(sum);

//Homework 4
let sum1 = 2
for(let i = 1; i <= 10; i++){
    console.log(sum1*i)
}

//Homeowrk 5
for(let i = 100; i >= 0; i--){
    console.log(i)
}

//Homework 6
let str = "ILOVEGOA"
str = Number(str.length)
console.log(str)

//Homework 7
let str1 = "ILOVEGOA";

for (let i = 0; i < str1.length; i++) {
    if (/[a-zA-Z]/.test(str1[i])) {
        console.log(str1[i]);
    }
}

//Homework 8
let i = 10;

while (i >= 0) {
    console.log(i);
    i--; // Decrement i in each iteration
}

console.log("HAPPY NEW YEAR!!!");

//Homework 9
let z = 1;

while(z<=20){
    if(z % 2 == 1){
        console.log(z)
    }
    z++
}

//Homework 10
function factorial(n) {
    let result = 1;
    let i = 1;
    while (i <= n) {
        result *= i;
        i++;
    }
    return result;
}

console.log(factorial(5));
