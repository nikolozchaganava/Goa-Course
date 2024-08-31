//Task 2
//Create an array
const array = [1, 2, 3, 4, 5, 6];

//Add an element at the end of the array
array.push(7);

//Remove the first element of an array
array.shift();

//Find the index of the 4 in the array
array.indexOf(4)

//Create a new array that contains the even number of elements
const evenArray = array.filter((num, index) => index % 2 === 0);