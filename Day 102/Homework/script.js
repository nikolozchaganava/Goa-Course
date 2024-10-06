// 1. Create a generator function that infinitely generates unlimited numbers starting from 0
function* infiniteNumbers() {
    let num = 0;
    while (true) {
        yield num++;
    }
}

const infiniteNum = infiniteNumbers();

console.log(infiniteNum.next());
console.log(infiniteNum.next().value);
console.log(infiniteNum.next().value);

// 2. Create a generator function that generates unlimited even numbers starting from 0
function* infiniteEvenNumbers() {
    let num = 0;
    while (true) {
        yield num;
        num += 2;
    }
}

const infiniteEvenNum = infiniteEvenNumbers();

console.log(infiniteEvenNum.next());
console.log(infiniteEvenNum.next().value);
console.log(infiniteEvenNum.next().value);

// 3. Create a generator function that generates random numbers using Math.random() function
function* infiniteRandomNum() {
    while (true) {
        yield Math.random();
    }
}

const randomNum = infiniteRandomNum();

console.log(randomNum.next());
console.log(randomNum.next().value);
console.log(randomNum.next().value);

// 4. Create a generator function that generates a random password which is 8 characters long(only numbers)
function* generateRandomPassword() {
    let password = '';
    while (password.length < 8) {
        password += Math.floor(Math.random() * 10);
    }
    yield password;
}   


const randomPassword = generateRandomPassword();

console.log(randomPassword.next());

// 5. (დაწერა მეზარება)
function* advacedPasswordGenerator() {
    const characters = [
        ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        ...'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ',
        ...'0123456789',
        ...'!@#$%^&*()_+=-[]'
    ];
    
    while (true) {
        let password = '';
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        yield password;
    }
}

const advancedRandomPassword = generateRandomPassword();

console.log(advancedRandomPassword.next());
console.log(advancedRandomPassword.next().value);
console.log(advancedRandomPassword.next().value);
