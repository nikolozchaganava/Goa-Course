function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Cannot divide by zero";
    } else {
        return x / y;
    }
}

console.log(add(5, 3));
console.log(subtract(8, 3));
console.log(multiply(4, 2));
console.log(divide(10, 2));

function Area(length, height) {
    return length * height;
}

console.log(Area(5, 3));

let i = 0;
function GoaBest() {
    for (i < 10; i+=i;) {
        console.log("Goa best");
    }
}

GoaBest();

function Perimeter(side1, side2, side3, side4) {
    return side1 + side2 + side3 + side4;
}

console.log(Perimeter(5, 3, 5, 3));


