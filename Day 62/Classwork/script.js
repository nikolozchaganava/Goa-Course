// მომხმარებელეს შემოატანინეთ 2 რიცხვი, თუ პირველი რიცხვი მეტია მეორე რიცხვზე, მაშინ გამოიტანეთ 'პირველი რიცხვი არის მეორე რიცხვზე მეტი', თუ მეორე რიცხვი არის მეტი პირველ რიცხვზე, მაშინ გამოიტანეთ 'მეორე რიცხვი მეტია პირველზე', ხოლო თუ ეს ორი რიცხვი ერთმანეთის ტოლია მაშინ გამოიტანეთ 'ეს რიცხვები ერთმანეთის ტოლია!'

let x = Number(prompt(`Input the 1st number`));
let y = Number(prompt(`Input the 2nd numeber`));

if (x > y){
    alert(`1st number is more then the 2nd number`)
} else if (x < y){
    alert(`1st number is less then the 2nd number`)
} else{
    alert(`These numbers are equal`)
}