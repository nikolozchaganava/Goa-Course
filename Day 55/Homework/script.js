// Homework 1
// შემოიტანეთ სამი სხვადასხვა მონაცემთა ტიპის ცვლადი და შეამოწმეთ მათი მონაცემტა ტიპი.

// Variables

let username = 'Nikolozi';
let family_name = 'Chaganava';
let age = 13;

//What type are these variables

console.log(typeof(username));
console.log(typeof(family_name));
console.log(typeof(age));

//Homework 2
// ააწყვეთ წინადადებას, სადაც შეიტანთ, თქვენს მონაცემებს, მაგალითად, სახელი,გვარი,ასაკი,დაბადების წელი, მისამართი და ა.შ

let username1 = window.prompt("What's your name?");
console.log(username);

let family_name1 = window.prompt("What's your family name?");
console.log(family_name1);

let age1 = window.prompt("What's your age?");
console.log(age1);

let date = window.prompt("What's your birth date?");
console.log(date);

let address = window.prompt("What's your address?");
console.log(address);

//Homework 3
// მოახდინეთ კონვერტაცია, მაგალითად სტრინგი გადააქციეთ ინტეჯერად და ასევე ინტეჯერი გადააქციეთ სტრინგად.

let number1 = "5";
let number2 = 10;
let answer = Number(number1) + number2

console.log(answer)
