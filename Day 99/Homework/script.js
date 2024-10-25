//Homework 1
function processArray(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
};

function addFive(num) {
    return num + 5;
}

let numbers = [1, 2, 3, 4, 5];

let processedNumbers = processArray(numbers, addFive);

console.log(processedNumbers);

//Homework 2
function squareNumbers(arr){
    return arr.map(num => num ** 2);
}

console.log(squareNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Homework 3
function filterTheArray(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(filterTheArray([1, 2, 2, 3, 4, 4, 4, 5]));

//Homework 4
//We're creating function called calculateSum to calculate the sum of the 2 numbers. So we are creating 2 parameters called num1 and num2.
function calculateSum(num1, num2){
    return num1 + num2; //sum of the 2 numbers
}

console.log(calculateSum(5, 10)); //We're printing out this code result in console. The numbers 5 and 10 are the value of those parameters which we created in function

//Homework 5
function assignGrade(score){

    if(score >= 90){
        return 'A';
    }else if(score >= 80){
        return 'B';
    } else if(score >= 70){
        return 'C';
    } else if(score >= 60){
        return 'D';
    } else {
        return 'F';
    }
};

function gradeStudent(scores, callback) {
    return scores.map(callback);
}

console.log(gradeStudent([90, 20, 50, 80, 40, 60], assignGrade));