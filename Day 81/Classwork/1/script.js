//Making random numbers
function changeTextNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let numberElement = document.getElementById('number');
    numberElement.textContent = randomNumber;
}