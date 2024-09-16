const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Create a function that will return a max number from the array
const findMax = (num) => {
    return Math.max(...num);
}

console.log(findMax(numbers));

// Create a function that will output the numbers that are greater than 10
const moreThenTen = (num) => {
    return num.filter(n => n > 10);
}

console.log(moreThenTen(numbers));

// Make highlighted text
const textElement = document.getElementById('text');
const word = 'World';

const highlightedText = textElement.innerHTML.replace(word, `<span>${word}</span>`);
textElement.innerHTML = highlightedText;
