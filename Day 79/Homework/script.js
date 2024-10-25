//JS Functions
//Example 1
function calculateAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    const avg = sum / arr.length
    return avg
}

//Example 2
function findMax(arr){
    let max = arr[0];
    
    for(i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max
}

//Example 3
function reverseString(str){
    let reverse = '';
    
    for(let i = str.length - 1; i>=0; i--){
        reverse += str[i];
    }
    
    return reverse
}

//DOM - Beginner Level

//Example 1
function changeText(textID, newText){
    document.getElementById(textID).textContent = newText;
}

//Example 2
function changeBackgroundColor(textID, newBackground){
    document.getElementById(textID).style.backgroundColor = newBackground;
}

//Example 3
function displayNone(textID, visibility){
    document.getElementById(textID).style.display = visibility;
}

function displayBlock(textID, visibility){
    document.getElementById(textID).style.display = visibility
}

//Prompt
//Example 1
function calculateRectangeArea(){
    let width = parseFloat(prompt("What is the width of the rectangle?"));
    let height= parseFloat(prompt("Whats the height of the rectangle?"));

    let area = width * height;
    return area
}
alert(calculateRectangeArea());

//Example 2
function convertTemperature(){
    let celcius = parseFloat(prompt("What a nice weather aint it? Whats the degree celcius outside?"));
    let Fahrenheit = (celcius * 9/5) + 32;
    return Fahrenheit
}

alert(convertTemperature());

//Example 3
function calculateCircumference(){
    let radius = parseFloat(prompt("What's the radius of the circle?"));
    const π = 3.141592;
    let circumference = 2 * π * radius;
    return circumference
}

alert(calculateAverage());

//Comparison Operators
//Example 1
function compareAges(){
    let firstAge = parseInt("Whats your age?");
    let secondAge = parseInt("Whats your best friend's age?");

    if(firstAge > secondAge){
        return "You are older than them"
    } else if(firstAge = secondAge){
        return "You are both equal"
    } else{
        return "They are older than you"
    }
}

alert(compareAges());

//Example 2
function compareHeights (){
    let firstHeight = parseInt("Whats your height?");
    let secondHeight = parseInt("Whats your best friend's height?");

    if(firstHeight > secondHeight){
        return "You are higher than them"
    } else if(firstHeight = secondHeight){
        return "You are both equal"
    } else{
        return "They are Higher than you"
    }
}

alert(compareHeights());

//Example 3
function compareScores(){
    let firstGrade = parseInt("Whats your grade?");
    let secondGrade = parseInt("Whats your best friend's grade?");

    if(firstGrade > secondGrade){
        return "You have higher grade than them"
    } else if(firstGrade = secondGrade){
        return "You are both equal"
    } else{
        return "They have higher grade than you"
    }
}
alert(compareScores());
