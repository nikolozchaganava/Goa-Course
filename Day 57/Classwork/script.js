
// let items = 200;
// let itemBoxes = 7

// console.log(items % itemBoxes)

let balance = Number(prompt(),'$');
let withdraw = Number(prompt(),'$');

if (withdraw > balance){
    let balanceLeft = false;
};

if (withdraw <= balance){
    balance = true;
}

if (balanceLeft = true){
    balanceLeft = balance - withdraw;
}

console.log(balance)
console.log(withdraw)
console.log(balanceLeft)