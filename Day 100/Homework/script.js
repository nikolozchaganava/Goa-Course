//Homework 1 - Write a function that prints 'Hello, world!' in 3 seconds using setTimeout
function printHelloWorld() {
  setTimeout(() => {
    console.log('Hello, world!');
  }, 3000);
}

printHelloWorld();

//Homework 2 - Write a function that prints 'first phrase' in 1 second and 'second phrase' in 2 seconds using setTimeout
function printPhrases() {
    setTimeout(() => {
    console.log('first phrase');
  }, 1000);
  
  setTimeout(() => {
    console.log('second phrase');
  }, 2000);
}

printPhrases();

//Homework 3 - Write a function that prints '1' in 1 second, '2' in 2 seconds, '3' in 3 seconds
function countdown() {
    setTimeout(() => {
        console.log('1');
    }, 1000);
    
    setTimeout(() => {
        console.log('2');
    }, 2000);

    setTimeout(() => {
        console.log('3');
    }, 3000);
}

countdown();

//Homework 4 - Write a function that takes a string and the amount of time (in milliseconds), then sets it to print the string after that time to the console. For example, showMessage("Goodbye", 3000) will print "Goodbye" in 3 seconds.

function showMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

showMessage('Hello, world!', 5000);
showMessage('Goodbye, world!', 4000);
showMessage('vorp vorp vorp', 2000);

//Homework 5 - Create a program that sets it to print "Timeout" in 5 seconds, but you want to follow it with a "continue..." message that prints "joke" in 1 second.
function joke() {
    setTimeout(() => {
        console.log('Timeout');
    }, 5000);

    setTimeout(() => {
        console.log('continue...');
    }, 5100);

    setTimeout(() => {
        console.log('joke');
    }, 6000);
}

joke();