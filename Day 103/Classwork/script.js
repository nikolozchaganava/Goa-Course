const arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const text = 'Hello, world!';

console.log(arr.map((index) => index + 1));
console.log('------------------------------------------');
console.log(arr.filter((value) => value % 2 === 0));
console.log('------------------------------------------');

const graterThanFive = (value) => {
    return value > 0;
}

console.log(arr.find(graterThanFive));
console.log('------------------------------------------');
console.log(arr.findIndex((value) => value > 5));
console.log('------------------------------------------');
console.log(arr.join(16));
console.log('------------------------------------------');

console.log(arr.indexOf((value) => value > 5));
console.log('------------------------------------------');
console.log(text.startsWith('Hello'));
console.log('------------------------------------------');
console.log(text.endsWith('Hello'));
console.log('------------------------------------------');
console.log(text.includes('ell'));